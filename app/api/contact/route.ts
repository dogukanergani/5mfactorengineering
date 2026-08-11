import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Lütfen zorunlu alanları (Ad Soyad, E-posta, Mesaj) doldurun." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const rows: [string, string][] = [
      ["Ad Soyad", name],
      ["E-posta", email],
      ["Telefon", phone || "-"],
      ["Konu", subject || "-"],
    ];

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 12px;">
          Yeni İletişim Formu Mesajı
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tbody>
            ${rows
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; background-color: #f3f4f6; width: 140px; border: 1px solid #e5e7eb;">${escapeHtml(
                  label
                )}</td>
                <td style="padding: 10px 12px; border: 1px solid #e5e7eb;">${escapeHtml(
                  String(value)
                )}</td>
              </tr>`
              )
              .join("")}
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; background-color: #f3f4f6; vertical-align: top; border: 1px solid #e5e7eb;">Mesaj</td>
              <td style="padding: 10px 12px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${escapeHtml(
                message
              )}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name.replace(/[\r\n]/g, " ")}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Yeni İletişim Formu: ${subject || "Konu belirtilmedi"}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form gönderim hatası:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin." },
      { status: 500 }
    );
  }
}
