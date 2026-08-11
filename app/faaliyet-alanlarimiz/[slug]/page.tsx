import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Zap } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return faaliyetAlanlari.map((alan) => ({ slug: alan.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const alan = faaliyetAlanlari.find((item) => item.slug === slug);

  if (!alan) {
    return {};
  }

  const title = `${alan.title} | Ankara 5M Factor Mühendislik`;
  const description = `Ankara ve Başkent OSB merkezli 5M Factor Mühendislik güvencesiyle ${alan.title.toLocaleLowerCase(
    "tr"
  )} alanında uçtan uca mühendislik çözümleri sunuyoruz. Projeniz için hemen teklif alın.`;

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: `/faaliyet-alanlarimiz/${alan.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [{ url: alan.image, alt: alan.imageAlt }],
    },
  };
}

export default async function FaaliyetAlaniPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const alan = faaliyetAlanlari.find((item) => item.slug === slug);

  if (!alan) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Faaliyet Alanlarımız", href: "/faaliyet-alanlarimiz" },
    { name: alan.title, href: `/faaliyet-alanlarimiz/${alan.slug}` },
  ];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };

  const serviceUrl = `${siteConfig.url}/faaliyet-alanlarimiz/${alan.slug}`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceUrl,
    serviceType: alan.title,
    name: alan.title,
    description: alan.description[0],
    url: serviceUrl,
    image: alan.image,
    provider: {
      "@id": siteConfig.organizationId,
    },
    areaServed: siteConfig.areaServed,
  };

  const relatedPosts = blogPosts.filter((post) => post.category === alan.title);

  return (
    <main className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <section className="px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return (
                  <li key={item.href} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="text-orange-500">{item.name}</span>
                    ) : (
                      <Link
                        href={item.href}
                        className="transition-colors hover:text-orange-500"
                      >
                        {item.name}
                      </Link>
                    )}
                    {!isLast && (
                      <ChevronRight className="h-4 w-4 shrink-0 text-gray-600" />
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {alan.title}
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-4 text-base leading-7 text-gray-300">
              {alan.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-700 shadow-lg">
              <Image
                src={alan.image}
                alt={alan.imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-orange-900/10 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 shrink-0 text-orange-500" />
              <h2 className="text-xl font-bold text-white">5M Farkı</h2>
            </div>
            <p className="mt-4 text-base leading-7 text-gray-300">
              {alan.title} alanında, mühendislik disiplinini saha tecrübesiyle
              birleştirerek her projede güvenlik, kalite ve zamanında teslimatı
              bir arada sunuyoruz. Deneyimli ekibimiz, en küçük teknik
              detaydan proje yönetimine kadar her aşamada titizlikle çalışır.
              5M Factor farkıyla, sadece bir hizmet değil uzun vadeli bir
              mühendislik ortaklığı sağlıyoruz.
            </p>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-bold text-white">İlgili Yazılar</h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group rounded-xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-orange-500"
                  >
                    <p className="font-semibold text-white transition-colors group-hover:text-orange-500">
                      {post.title}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm text-gray-400">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center sm:p-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Bu Hizmete İhtiyacınız Mı Var?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-300 sm:text-base">
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
