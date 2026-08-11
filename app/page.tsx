"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building,
  Building2,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Factory,
  Flame,
  Hospital,
  PenTool,
  Search,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
import { serviceIcons } from "@/lib/service-icons";

const referanslar = [
  {
    name: "Ostim Endüstri Tesisleri",
    category: "Doğalgaz Altyapısı",
    icon: Flame,
  },
  {
    name: "Bilkent Konutları",
    category: "Mekanik Tesisat",
    icon: Building2,
  },
  {
    name: "Kırıkkale Enerji Santrali",
    category: "Revizyon",
    icon: Zap,
  },
  {
    name: "Keçiören Toplu Konutları",
    category: "Projelendirme",
    icon: Building,
  },
  {
    name: "Ankara Şehir Hastanesi",
    category: "Taahhüt",
    icon: Hospital,
  },
  {
    name: "Sincan OSB Üretim Tesisi",
    category: "Endüstriyel İmalat",
    icon: Factory,
  },
];

const yorumlar = [
  {
    yorum:
      "Doğalgaz altyapı projemizde 5M Factor ile çalıştık; zamanında teslimat ve titiz mühendislik yaklaşımları için teşekkür ederiz. Sürecin her adımında şeffaf bir iletişim sağladılar.",
    isim: "Ahmet Yılmaz",
    unvan: "Proje Yöneticisi",
  },
  {
    yorum:
      "Mekanik tesisat işlerimizde gösterdikleri profesyonellik beklentimizin çok üzerindeydi. Saha ekibi disiplinli, teknik ofis ise çözüm odaklı çalışıyor.",
    isim: "Elif Demir",
    unvan: "Tesis Müdürü",
  },
  {
    yorum:
      "Endüstriyel imalat ve montaj sürecinde karşılaştığımız zorlu teknik detaylarda hızlı ve güvenilir çözümler ürettiler. Uzun soluklu bir iş ortaklığı için doğru tercih.",
    isim: "Mehmet Kaya",
    unvan: "Genel Müdür Yardımcısı",
  },
  {
    yorum:
      "Anahtar teslim taahhüt sürecinde bütçe ve takvime tam uyum sağladılar. Projelendirme aşamasındaki detaycı yaklaşımları sahada bize çok zaman kazandırdı.",
    isim: "Zeynep Arslan",
    unvan: "Satın Alma Müdürü",
  },
  {
    yorum:
      "Tesisimizin kapasite artırım çalışmasını üretim sürekliliğini bozmadan tamamladılar. Modernizasyon sürecinde gösterdikleri mühendislik disiplini takdire şayan.",
    isim: "Caner Öztürk",
    unvan: "Fabrika Müdürü",
  },
  {
    yorum:
      "Periyodik bakım anlaşmamız kapsamında hem hızlı arıza müdahalesi hem de düzenli raporlama sağlıyorlar. Ekipmanlarımızın ömrünü uzattıklarını rahatlıkla söyleyebilirim.",
    isim: "Fatma Şahin",
    unvan: "İşletme Müdürü",
  },
];

const isAkisiAdimlari = [
  {
    title: "Keşif ve Planlama",
    description:
      "Saha keşfi ve ihtiyaç analizi yaparak projenizin temellerini birlikte belirliyoruz.",
    icon: Search,
  },
  {
    title: "Projelendirme ve Fiyatlandırma",
    description:
      "Teknik çizimler ve detaylı fiyat teklifiyle süreci şeffaf bir şekilde planlıyoruz.",
    icon: PenTool,
  },
  {
    title: "Uygulama ve Montaj",
    description:
      "Deneyimli saha ekiplerimizle projeyi güvenli ve zamanında hayata geçiriyoruz.",
    icon: Wrench,
  },
  {
    title: "Teslimat ve Destek",
    description:
      "Teslimat sonrasında da periyodik bakım ve teknik destekle yanınızda oluyoruz.",
    icon: CheckCircle,
  },
];

const faaliyetSorular = [
  {
    soru: "Ankara içi ücretsiz keşif yapıyor musunuz?",
    cevap:
      "Evet, Ankara ve çevresindeki tüm projeleriniz için ücretsiz keşif ve ihtiyaç analizi hizmeti sunuyoruz. Saha ekibimiz yerinde inceleme yaparak size en uygun mühendislik çözümünü planlar.",
  },
  {
    soru: "Endüstriyel tesisat projeleri ne kadar sürüyor?",
    cevap:
      "Proje süresi; tesisin büyüklüğüne, kapsamına ve teknik gereksinimlere göre değişir. Keşif sonrası hazırladığımız iş programıyla size net bir zaman planı sunar, süreç boyunca şeffaf raporlama yaparız.",
  },
  {
    soru: "Hangi bölgelere hizmet veriyorsunuz?",
    cevap:
      "Merkezimiz Ankara Sincan Başkent OSB'de bulunuyor. Ankara, Ostim, Kırıkkale başta olmak üzere Türkiye genelindeki doğalgaz, mekanik tesisat ve endüstriyel mühendislik projelerinde hizmet veriyoruz.",
  },
  {
    soru: "Periyodik bakım ve arıza müdahalesi sağlıyor musunuz?",
    cevap:
      "Evet, teslimat sonrasında periyodik bakım anlaşmaları ve hızlı arıza müdahale hizmetleriyle tesislerinizin kesintisiz ve güvenli çalışmasını sağlıyoruz.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const totalServices = faaliyetAlanlari.length;

  const visibleServices = [0, 1, 2].map(
    (offset) => faaliyetAlanlari[(activeIndex + offset) % totalServices]
  );

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + totalServices) % totalServices);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % totalServices);

  const totalTestimonials = yorumlar.length;
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const goPrevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + totalTestimonials) % totalTestimonials
    );
  const goNextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % totalTestimonials);

  const visibleTestimonials = [0, 1].map(
    (offset) => yorumlar[(testimonialIndex + offset) % totalTestimonials]
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faaliyetSorular.map((item) => ({
      "@type": "Question",
      name: item.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cevap,
      },
    })),
  };

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* 1. Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2000&auto=format&fit=crop"
          alt="Ankara Başkent OSB Modern Endüstriyel Mühendislik Tesisi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Ankara&apos;da Mühendislikte Güven ve Çözüm Ortağınız
          </h1>
          <p className="mt-4 max-w-2xl text-base text-gray-200 sm:mt-6 sm:text-lg">
            Ankara merkezli bir mühendislik firması olarak, doğalgaz
            sistemlerinden endüstriyel tesislere, projelendirmeden taahhüde
            kadar mühendislik ve inşaat alanındaki tüm ihtiyaçlarınızda
            yanınızdayız.
          </p>
          <Link
            href="#hizmetler"
            className="mt-8 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600 sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
          >
            Hizmetlerimizi İnceleyin
          </Link>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* 2. Faaliyet Alanlarımız Özeti */}
      <section id="hizmetler" className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Faaliyet Alanlarımız
            </h2>
            <span className="mt-4 h-1 w-16 rounded-full bg-orange-500" />
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 sm:mt-16 sm:gap-6">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Önceki hizmet"
              className="shrink-0 rounded-full border border-gray-700 bg-gray-800 p-2 text-gray-300 transition-colors hover:border-orange-500 hover:text-orange-500 sm:p-3"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
              {visibleServices.map((service, index) => {
                const Icon = serviceIcons[service.slug];
                return (
                  <Link
                    key={`${service.slug}-${index}`}
                    href={`/faaliyet-alanlarimiz/${service.slug}`}
                    className={`group overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition-colors hover:border-orange-500 ${
                      index > 0 ? "hidden md:block" : ""
                    }`}
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="rounded-t-xl object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-3 p-6 text-center">
                      <Icon className="h-8 w-8 text-orange-500" />
                      <p className="text-base font-semibold text-white transition-colors group-hover:text-orange-500">
                        {service.title}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Sonraki hizmet"
              className="shrink-0 rounded-full border border-gray-700 bg-gray-800 p-2 text-gray-300 transition-colors hover:border-orange-500 hover:text-orange-500 sm:p-3"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/faaliyet-alanlarimiz"
              className="rounded-md bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Tüm Hizmetlerimiz
            </Link>
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* İş Akışımız */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              İş Akışımız
            </h2>
            <span className="mt-4 h-1 w-16 rounded-full bg-orange-500" />
            <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
              Keşiften teslimata kadar her adımda şeffaf ve disiplinli bir
              süreç izliyoruz.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-16 md:grid-cols-4 md:gap-8">
            {isAkisiAdimlari.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-700 bg-gray-800">
                  <Icon className="h-7 w-7 text-orange-500" />
                </div>
                <p className="mt-5 text-lg font-semibold text-white">
                  {title}
                </p>
                <p className="mt-2 text-sm text-gray-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* 3. Referanslarımız */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Referanslarımız
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:mt-16 lg:grid-cols-6">
            {referanslar.map(({ name, category, icon: Icon }) => (
              <div
                key={name}
                className="flex min-h-[150px] flex-col items-center justify-center gap-2 rounded-lg bg-gray-800 p-4 text-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-orange-500"
              >
                <Icon className="h-9 w-9" />
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* 4. Müşteri Yorumları */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <span className="h-1 w-16 rounded-full bg-orange-500" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Müşterilerimiz Neler Söylüyor?
            </h2>
          </div>

          <div className="mt-12 flex items-center justify-center gap-3 sm:mt-16 sm:gap-6">
            <button
              type="button"
              onClick={goPrevTestimonial}
              aria-label="Önceki yorum"
              className="shrink-0 rounded-full border border-gray-700 bg-gray-800 p-2 text-gray-300 transition-colors hover:border-orange-500 hover:text-orange-500 sm:p-3"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="grid flex-1 grid-cols-1 gap-8 md:grid-cols-2">
              {visibleTestimonials.map((yorum, index) => (
                <div
                  key={`${yorum.isim}-${index}`}
                  className={`rounded-xl border border-gray-700 bg-gray-800 p-8 transition-colors hover:border-orange-500 ${
                    index > 0 ? "hidden md:block" : ""
                  }`}
                >
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-5 w-5 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {yorum.yorum}
                  </p>
                  <p className="mt-6 text-sm font-semibold text-white">
                    {yorum.isim}
                  </p>
                  <p className="text-sm text-orange-500">{yorum.unvan}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={goNextTestimonial}
              aria-label="Sonraki yorum"
              className="shrink-0 rounded-full border border-gray-700 bg-gray-800 p-2 text-gray-300 transition-colors hover:border-orange-500 hover:text-orange-500 sm:p-3"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* 5. Kurumsal Özeti */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                5M Factor Mühendislik
              </h2>
              <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
              <p className="mt-6 text-base leading-7 text-gray-300">
                Başkent OSB, Sincan&apos;daki merkezimizden Ankara ve
                çevresine hizmet veriyoruz. Doğalgaz sistemlerinden
                endüstriyel tesislere, projelendirmeden taahhüde kadar
                mühendislik ve inşaat sektörünün pek çok alanında güvenilir
                ve sürdürülebilir çözümler sunuyoruz. Yenilikçi mühendislik
                yaklaşımlarını saha disipliniyle birleştirerek, her projede
                kalite ve güvenlikten ödün vermeden çalışıyoruz.
              </p>
              <p className="mt-4 text-base leading-7 text-gray-300">
                Deneyimli mühendis kadromuz ve güçlü teknik altyapımızla,
                planlama aşamasından anahtar teslim uygulamaya kadar şeffaf
                bir iletişim kurarak müşterilerimizin uzun vadeli iş ortağı
                olmayı hedefliyoruz.
              </p>
              <Link
                href="/kurumsal"
                className="mt-8 inline-block rounded-md bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
              >
                Bizi Yakından Tanıyın
              </Link>
            </div>

            <div className="relative h-full min-h-[300px] w-full overflow-hidden rounded-xl border border-gray-700 shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
                alt="Ankara Sincan Şantiyesinde Çalışan 5M Factor Mühendislik Ekibi"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />

      {/* 6. Sıkça Sorulan Sorular */}
      <section className="px-6 py-20 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Sıkça Sorulan Sorular
            </h2>
            <span className="mt-4 h-1 w-16 rounded-full bg-orange-500" />
          </div>

          <div className="mt-12 space-y-4 sm:mt-16">
            {faaliyetSorular.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={item.soru}
                  className="rounded-xl border border-gray-700 bg-gray-800"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-semibold text-white">
                      {item.soru}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-orange-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <p className="px-6 pb-6 text-sm leading-6 text-gray-300">
                      {item.cevap}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="h-px w-full border-0 bg-black" />
    </main>
  );
}
