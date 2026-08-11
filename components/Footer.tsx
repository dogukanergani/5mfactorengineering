import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";

const hizliBaglantilar = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-wide text-white">
              5M FACTOR MÜHENDİSLİK
            </p>
            <p className="mt-4 text-sm leading-6 text-gray-400">
              Doğalgaz sistemlerinden endüstriyel tesislere, projelendirmeden
              taahhüde kadar mühendislik ve inşaat alanında güvenilir çözüm
              ortağınız.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/5mfactormuhendislik/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-orange-500"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Hızlı Bağlantılar
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {hizliBaglantilar.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-orange-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              Faaliyet Alanlarımız
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              {faaliyetAlanlari.map((alan) => (
                <li key={alan.slug}>
                  <Link
                    href={`/faaliyet-alanlarimiz/${alan.slug}`}
                    className="text-gray-400 hover:text-orange-500"
                  >
                    {alan.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-white">
              İletişim Bilgileri
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                <span>
                  Malıköy Başkent Organize Sanayi Bölgesi Mahallesi 20. Cadde
                  Blok:H No:5 İç Kapı No:1, Sincan, Ankara, Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                <a href="tel:+905316760684" className="hover:text-orange-500">
                  0531 676 06 84
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <a href="mailto:info@5mfactormuhendislik.com.tr" className="hover:text-orange-500">
                  info@5mfactormuhendislik.com.tr
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-6 text-center text-sm text-gray-500 sm:flex-row sm:justify-between sm:text-left lg:px-8">
          <p>Copyright &copy; 2026 5M Factor Mühendislik. Tüm hakları saklıdır.</p>
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.velorailetisim.com"
              className="font-semibold text-orange-500 hover:text-orange-400"
            >
              Velora İletişim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
