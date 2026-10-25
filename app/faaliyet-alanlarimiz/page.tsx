import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/servicesData";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Faaliyet Alanlarımız – Ankara HVAC, Yangın, Doğal Gaz ve Tesisat Hizmetleri",
  description:
    "Ankara'da endüstriyel ve konfor HVAC, yangın söndürme, sıhhi tesisat, otomasyon, doğal gaz, basınçlı hava, kızgın yağ/su/buhar, altyapı ve proses tesisatı hizmetleri.",
  alternates: {
    canonical: "/faaliyet-alanlarimiz",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "5M Factor Mühendislik Faaliyet Alanları",
  itemListElement: services.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: service.title,
    url: `${siteConfig.url}/faaliyet-alanlarimiz/${service.slug}`,
  })),
};

export default function FaaliyetAlanlariPage() {
  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd).replace(/</g, "\u003c"),
        }}
      />
      <section className="px-6 pb-12 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Faaliyet Alanlarımız
          </h1>
          <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
            Isıtma ve havalandırmadan yangın güvenliğine, otomasyondan
            endüstriyel proses hatlarına kadar tüm mühendislik ihtiyaçlarınız
            için tek adres.
          </p>
        </div>
      </section>

      <section className="flex-1 bg-paper px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/faaliyet-alanlarimiz/${service.slug}`}
                className="group relative block h-72 overflow-hidden rounded-xl border border-gray-300 shadow-md transition-all hover:border-orange-500 hover:shadow-xl"
              >
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 transition-colors group-hover:bg-black/50" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h2 className="text-xl font-bold text-white">
                    {service.title}
                  </h2>
                  <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-20" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
