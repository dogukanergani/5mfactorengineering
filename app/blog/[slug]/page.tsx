import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Anasayfa", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
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

  const relatedService = faaliyetAlanlari.find(
    (alan) => alan.title === post.category
  );

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@id": siteConfig.organizationId,
    },
    publisher: {
      "@id": siteConfig.organizationId,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    ...(relatedService && {
      about: {
        "@id": `${siteConfig.url}/faaliyet-alanlarimiz/${relatedService.slug}`,
      },
    }),
  };

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
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <article className="px-6 pb-20 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
              {breadcrumbItems.map((item, index) => {
                const isLast = index === breadcrumbItems.length - 1;
                return (
                  <li key={item.href} className="flex items-center gap-2">
                    {isLast ? (
                      <span className="line-clamp-1 text-orange-500">
                        {item.name}
                      </span>
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

          <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
            {post.category}
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-gray-400">
            <span>{post.author}</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </div>

          <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-gray-700 shadow-lg">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 space-y-5 text-base leading-7 text-gray-300">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {relatedService && (
            <Link
              href={`/faaliyet-alanlarimiz/${relatedService.slug}`}
              className="mt-10 flex items-center justify-between gap-4 rounded-xl border border-gray-700 bg-gray-800 p-5 transition-colors hover:border-orange-500"
            >
              <span className="text-sm text-gray-300">
                İlgili Hizmetimiz:{" "}
                <span className="font-semibold text-white">
                  {relatedService.title}
                </span>
              </span>
              <ChevronRight className="h-5 w-5 shrink-0 text-orange-500" />
            </Link>
          )}

          <div className="mt-12 rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center">
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Projeniz İçin Mühendislik Desteği Alın
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-gray-300">
              Ankara ve Başkent OSB&apos;deki mühendislik projeleriniz için
              uzman ekibimizle görüşün.
            </p>
            <Link
              href="/iletisim"
              className="mt-6 inline-block rounded-full bg-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-orange-600"
            >
              Bizimle İletişime Geçin
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
