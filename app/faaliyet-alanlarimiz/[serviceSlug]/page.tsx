import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Zap } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ServiceFaq from "@/components/ServiceFaq";
import { blogPosts } from "@/lib/blog-posts";
import { getService, services } from "@/lib/servicesData";
import { clip, lowerKeep } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ serviceSlug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    return {};
  }

  const seoLower = lowerKeep(service.seoName);
  const title = `${service.seoName} Ankara | 5M Factor Mühendislik`;
  const description = clip(
    `Ankara'da ${seoLower} hizmeti: projelendirme, uygulama, devreye alma ve bakım. Başkent OSB merkezli 5M Factor Mühendislik'ten ücretsiz keşif.`
  );

  return {
    title: { absolute: title },
    description,
    keywords: [
      `Ankara ${seoLower}`,
      `${seoLower} Ankara`,
      `Ankara ${lowerKeep(service.title)}`,
      "Başkent OSB mühendislik",
      "Sincan mühendislik firması",
    ],
    alternates: {
      canonical: `/faaliyet-alanlarimiz/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params;
  const service = getService(serviceSlug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${siteConfig.url}/faaliyet-alanlarimiz/${service.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceUrl,
    serviceType: service.title,
    name: service.title,
    description: service.description[0],
    url: serviceUrl,
    image: service.image,
    provider: { "@id": siteConfig.organizationId },
    areaServed: siteConfig.areaServed,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.subServices.map((sub) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: sub.title,
          url: `${serviceUrl}/${sub.slug}`,
        },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const relatedPosts = blogPosts.filter(
    (post) => post.category === service.title
  );

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="px-6 pb-16 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { name: "Anasayfa", href: "/" },
              { name: "Faaliyet Alanlarımız", href: "/faaliyet-alanlarimiz" },
              {
                name: service.title,
                href: `/faaliyet-alanlarimiz/${service.slug}`,
              },
            ]}
          />

          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
            <span className="mt-4 block h-1.5 w-20 rounded-full bg-orange-500" />
            <p className="mt-4 text-base font-medium text-orange-600">
              Ankara ve Başkent OSB&apos;de {lowerKeep(service.seoName)} çözümleri
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-4 text-base leading-7 text-gray-600">
              {service.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-gray-900">
            {service.title} Alt Hizmetlerimiz
          </h2>
          <span className="mt-3 block h-1 w-12 rounded-full bg-orange-500" />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {service.subServices.map((sub) => (
              <Link
                key={sub.slug}
                href={`/faaliyet-alanlarimiz/${service.slug}/${sub.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-300 bg-card transition-colors hover:border-orange-500"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={sub.image}
                    alt={sub.imageAlt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                    {sub.title}
                  </p>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                    {sub.content[0]}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-500">
                    Detaylı İncele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Sıkça Sorulan Sorular
          </h2>
          <span className="mb-8 mt-3 block h-1 w-12 rounded-full bg-orange-500" />
          <ServiceFaq faqs={service.faqs} />
        </div>
      </section>

      <section className="px-6 pb-20 pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-orange-500/10 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 shrink-0 text-orange-500" />
              <h2 className="text-xl font-bold text-gray-900">5M Farkı</h2>
            </div>
            <p className="mt-4 text-base leading-7 text-gray-600">
              {service.title} alanında, mühendislik disiplinini saha
              tecrübesiyle birleştirerek her projede güvenlik, kalite ve
              zamanında teslimatı bir arada sunuyoruz. Deneyimli ekibimiz, en
              küçük teknik detaydan proje yönetimine kadar her aşamada
              titizlikle çalışır.
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-900">İlgili Yazılar</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl border border-gray-300 bg-card p-5 transition-colors hover:border-orange-500"
                  >
                    <p className="font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                      {post.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl bg-paper p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Bu Hizmete İhtiyacınız Mı Var?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
              Projenize özel mühendislik çözümleri ve fiyat teklifi almak için
              uzman ekibimizle görüşün.
            </p>
            <Link
              href="/iletisim"
              className="mt-8 inline-block rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
