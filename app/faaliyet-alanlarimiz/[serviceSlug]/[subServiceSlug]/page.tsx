import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { getSubService, services } from "@/lib/servicesData";
import { clip, lowerKeep } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type Params = { serviceSlug: string; subServiceSlug: string };

export function generateStaticParams() {
  return services.flatMap((service) =>
    service.subServices.map((sub) => ({
      serviceSlug: service.slug,
      subServiceSlug: sub.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { serviceSlug, subServiceSlug } = await params;
  const found = getSubService(serviceSlug, subServiceSlug);

  if (!found) {
    return {};
  }

  const { service, subService } = found;
  const subLower = lowerKeep(subService.title);
  const title = `${subService.title} Ankara | 5M Factor Mühendislik`;
  const description = clip(
    `Ankara'da ${subService.title} hizmeti: projelendirme, uygulama ve devreye alma. Ücretsiz keşif için 5M Factor Mühendislik.`
  );
  const path = `/faaliyet-alanlarimiz/${service.slug}/${subService.slug}`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `Ankara ${subLower}`,
      `${subLower} Ankara`,
      `Ankara ${lowerKeep(service.seoName)}`,
      "Başkent OSB mühendislik",
    ],
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      images: [{ url: subService.image, alt: subService.imageAlt }],
    },
  };
}

export default async function SubServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { serviceSlug, subServiceSlug } = await params;
  const found = getSubService(serviceSlug, subServiceSlug);

  if (!found) {
    notFound();
  }

  const { service, subService } = found;
  const serviceHref = `/faaliyet-alanlarimiz/${service.slug}`;
  const pageUrl = `${siteConfig.url}${serviceHref}/${subService.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": pageUrl,
    serviceType: subService.title,
    name: subService.title,
    description: subService.content[0],
    url: pageUrl,
    image: subService.image,
    provider: { "@id": siteConfig.organizationId },
    areaServed: siteConfig.areaServed,
    isRelatedTo: { "@id": `${siteConfig.url}${serviceHref}` },
  };

  const otherSubServices = service.subServices.filter(
    (sub) => sub.slug !== subService.slug
  );

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="px-6 pb-16 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb
            items={[
              { name: "Anasayfa", href: "/" },
              { name: "Faaliyet Alanlarımız", href: "/faaliyet-alanlarimiz" },
              { name: service.title, href: serviceHref },
              {
                name: subService.title,
                href: `${serviceHref}/${subService.slug}`,
              },
            ]}
          />

          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {subService.title}
            </h1>
            <span className="mt-4 block h-1.5 w-20 rounded-full bg-orange-500" />
            <p className="mt-4 text-base font-medium text-orange-600">
              Ankara ve Başkent OSB&apos;de {lowerKeep(service.seoName)} kapsamında
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            <div className="space-y-4 text-base leading-8 text-gray-600 lg:col-span-3">
              {subService.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <Link
                href={serviceHref}
                className="!mt-8 inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {service.title} Sayfasına Dön
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg">
                <Image
                  src={subService.image}
                  alt={subService.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {otherSubServices.length > 0 && (
        <section className="bg-paper px-6 py-16 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              {service.title} Diğer Hizmetlerimiz
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {otherSubServices.map((sub) => (
                <Link
                  key={sub.slug}
                  href={`${serviceHref}/${sub.slug}`}
                  className="group rounded-xl border border-gray-300 bg-card p-5 shadow-sm transition-all hover:border-orange-500 hover:shadow-md"
                >
                  <p className="font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                    {sub.title}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {sub.content[0]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-6 pb-20 pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl border border-gray-300 bg-card p-8 text-center sm:p-10">
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
