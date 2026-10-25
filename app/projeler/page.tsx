import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projeler – Ankara'da Tamamlanan Mühendislik Projeleri",
  description:
    "Ankara, Ostim ve Başkent OSB'de doğal gaz, tesisat, HVAC, yangın söndürme ve endüstriyel proses alanlarında gerçekleştirdiğimiz mühendislik projeleri.",
  alternates: {
    canonical: "/projeler",
  },
};

export default function ProjelerPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-12 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Projeler
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
            <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
              Ankara ve Başkent OSB&apos;de farklı ölçeklerde
              gerçekleştirdiğimiz mühendislik projelerinden örnekler.
            </p>
          </div>
        </div>
      </section>

      <section className="flex-1 bg-paper px-6 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((post) => (
              <Link
                key={post.slug}
                href={`/projeler/${post.slug}`}
                className="group overflow-hidden rounded-xl border border-gray-300 bg-card shadow-sm transition-all hover:border-orange-500 hover:shadow-lg"
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
                  <p className="text-lg font-semibold text-gray-900 transition-colors group-hover:text-orange-500">
                    {post.title}
                  </p>
                  <p className="text-sm leading-6 text-gray-600">
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
