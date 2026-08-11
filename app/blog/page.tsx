import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ankara merkezli 5M Factor Mühendislik'ten doğalgaz sistemleri, mekanik tesisat ve endüstriyel bakım hakkında güncel mühendislik makaleleri.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Blog
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
            <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
              Ankara ve Başkent OSB&apos;deki mühendislik projelerimizden
              edindiğimiz tecrübeyi paylaştığımız makaleler.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition-colors hover:border-orange-500"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                    {post.category}
                  </span>
                  <p className="text-lg font-semibold text-white transition-colors group-hover:text-orange-500">
                    {post.title}
                  </p>
                  <p className="text-sm leading-6 text-gray-400">
                    {post.excerpt}
                  </p>
                  <time
                    dateTime={post.date}
                    className="mt-2 text-xs text-gray-500"
                  >
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
