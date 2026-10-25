import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/servicesData";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-500">
          404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Aradığınız sayfa bulunamadı
        </h1>
        <span className="mx-auto mt-4 block h-1 w-16 rounded-full bg-orange-500" />
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sayfa taşınmış veya kaldırılmış olabilir. Aşağıdaki bağlantılardan
          Ankara&apos;daki mühendislik hizmetlerimize ulaşabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            Anasayfa
          </Link>
          <Link
            href="/faaliyet-alanlarimiz"
            className="rounded-md border border-orange-500 px-6 py-3 text-sm font-semibold text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
          >
            Faaliyet Alanlarımız
          </Link>
          <Link
            href="/iletisim"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-orange-500 hover:text-orange-600"
          >
            İletişim
          </Link>
        </div>
        <ul className="mt-10 grid grid-cols-1 gap-2 text-left sm:grid-cols-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/faaliyet-alanlarimiz/${service.slug}`}
                className="block rounded-lg border border-gray-300 bg-card px-4 py-3 text-sm text-gray-700 transition-colors hover:border-orange-500 hover:text-orange-600"
              >
                {service.seoName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
