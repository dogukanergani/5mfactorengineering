import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import IletisimForm from "@/components/IletisimForm";

export const metadata: Metadata = {
  title: "İletişim – Ankara Mühendislik Teklif ve Ücretsiz Keşif",
  description:
    "5M Factor Mühendislik, Malıköy Başkent OSB, Sincan/Ankara. HVAC, doğal gaz, yangın söndürme ve tesisat projeleriniz için ücretsiz keşif ve teklif almak üzere iletişime geçin.",
  alternates: {
    canonical: "/iletisim",
  },
};

const calismaSaatleri = [
  { gun: "Pazartesi - Cuma", saat: "08:30 - 18:00" },
  { gun: "Cumartesi", saat: "09:00 - 13:00" },
  { gun: "Pazar", saat: "Kapalı" },
];

export default function IletisimPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-12 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            İletişim
          </h1>
          <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            Projeniz için ücretsiz keşif ve teklif almak üzere bize ulaşın.
          </p>
        </div>
      </section>

      <section className="flex-1 bg-paper px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl border border-gray-300 bg-card shadow-sm p-5">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-semibold text-gray-900">Adres</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Malıköy Başkent Organize Sanayi Bölgesi Mahallesi 20.
                    Cadde Blok:H No:5 İç Kapı No:1, Sincan, Ankara, Türkiye
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-300 bg-card shadow-sm p-5">
                <Phone className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-semibold text-gray-900">Telefon</p>
                  <a
                    href="tel:+905316760684"
                    className="mt-1 block text-sm text-gray-600 hover:text-orange-500"
                  >
                    0531 676 06 84
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border border-gray-300 bg-card shadow-sm p-5">
                <Mail className="mt-0.5 h-6 w-6 shrink-0 text-orange-500" />
                <div>
                  <p className="font-semibold text-gray-900">E-posta</p>
                  <a
                    href="mailto:info@5mfactormuhendislik.com.tr"
                    className="mt-1 block text-sm text-gray-600 hover:text-orange-500"
                  >
                    info@5mfactormuhendislik.com.tr
                  </a>
                </div>
              </div>

              <div className="rounded-xl border border-gray-300 bg-card shadow-sm p-5">
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 shrink-0 text-orange-500" />
                  <p className="font-semibold text-gray-900">Çalışma Saatleri</p>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-600">
                  {calismaSaatleri.map((item) => (
                    <li key={item.gun} className="flex items-center justify-between">
                      <span>{item.gun}</span>
                      <span>{item.saat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <IletisimForm />
          </div>

          <div className="mt-16 w-full">
            <iframe
              src="https://maps.google.com/maps?q=Ba%C5%9Fkent+Organize+Sanayi+B%C3%B6lgesi,+Sincan,+Ankara&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-96 rounded-2xl shadow-lg grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
