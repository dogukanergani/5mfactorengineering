import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
import { serviceIcons } from "@/lib/service-icons";

export const metadata: Metadata = {
  title: "Faaliyet Alanlarımız",
  description:
    "Ankara merkezli 5M Factor Mühendislik'in doğalgaz sistemleri, mekanik tesisat, endüstriyel imalat ve taahhüt başta olmak üzere tüm faaliyet alanlarını inceleyin.",
  alternates: {
    canonical: "/faaliyet-alanlarimiz",
  },
};

export default function FaaliyetAlanlariPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Faaliyet Alanlarımız
            </h1>
            <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {faaliyetAlanlari.map((alan) => {
              const Icon = serviceIcons[alan.slug];
              return (
                <Link
                  key={alan.slug}
                  href={`/faaliyet-alanlarimiz/${alan.slug}`}
                  className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition-colors hover:border-orange-500"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={alan.image}
                      alt={alan.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-3 p-6 text-center">
                    <Icon className="h-8 w-8 text-orange-500" />
                    <p className="text-base font-semibold text-white transition-colors group-hover:text-orange-500">
                      {alan.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
