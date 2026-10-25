"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { services as faaliyetAlanlari } from "@/lib/servicesData";

const navLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/kurumsal" },
  { label: "Projeler", href: "/projeler" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [openMobileService, setOpenMobileService] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) => pathname === href;
  const isServicesActive = pathname.startsWith("/faaliyet-alanlarimiz");

  return (
    <header className="sticky top-0 z-50 border-b border-gray-800 bg-gray-900">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="5M Factor Mühendislik Ankara Doğalgaz ve Mekanik Tesisat Logosu"
            width={300}
            height={100}
            className="object-contain w-auto h-14 md:h-20"
          />
        </Link>

        {/* Masaüstü menü - ortada */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-gray-200 transition-colors lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={`inline-block py-2 transition-colors ${
                    active ? "text-orange-500" : "group-hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
          <li className="group relative">
            <Link
              href="/faaliyet-alanlarimiz"
              className={`relative flex items-center gap-1 py-2 transition-colors ${
                isServicesActive ? "text-orange-500" : "group-hover:text-orange-500"
              }`}
            >
              Faaliyet Alanlarımız
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isServicesActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <ul className="mt-2 rounded-md bg-gray-800 py-2 shadow-lg ring-1 ring-gray-700">
                {faaliyetAlanlari.map((alan) => (
                  <li key={alan.slug} className="group/item relative">
                    <Link
                      href={`/faaliyet-alanlarimiz/${alan.slug}`}
                      className="flex items-center justify-between gap-2 px-4 py-2 text-sm text-gray-200 group-hover/item:bg-gray-700 group-hover/item:text-orange-500"
                    >
                      {alan.title}
                      <ChevronRight className="h-4 w-4 shrink-0" />
                    </Link>
                    <div className="invisible absolute left-full top-0 w-72 opacity-0 transition-all duration-200 group-hover/item:visible group-hover/item:opacity-100">
                      <ul className="ml-1 rounded-md bg-gray-800 py-2 shadow-lg ring-1 ring-gray-700">
                        {alan.subServices.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/faaliyet-alanlarimiz/${alan.slug}/${sub.slug}`}
                              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-orange-500"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li className="group relative">
            <Link
              href="/iletisim"
              className={`inline-block py-2 transition-colors ${
                isActive("/iletisim") ? "text-orange-500" : "group-hover:text-orange-500"
              }`}
            >
              İletişim
            </Link>
            <span
              className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                isActive("/iletisim") ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </li>
        </ul>

        {/* Masaüstü sağ blok - ikonlar ve CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-4 text-gray-200">
            <Link
              href="https://www.instagram.com/5mfactormuhendislik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-500"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
          <Link
            href="/iletisim"
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobil hamburger */}
        <button
          type="button"
          aria-label="Menüyü aç/kapat"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {/* Mobil açılır menü */}
      <div
        className={`overflow-y-auto bg-gray-900 transition-[max-height] duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col divide-y divide-gray-700 px-6 text-gray-200">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-4 font-medium transition-colors hover:text-orange-500 ${
                  isActive(link.href) ? "text-orange-500" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <div className="flex items-center justify-between">
              <Link
                href="/faaliyet-alanlarimiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block flex-1 py-4 font-medium transition-colors hover:text-orange-500 ${
                  isServicesActive ? "text-orange-500" : ""
                }`}
              >
                Faaliyet Alanlarımız
              </Link>
              <button
                type="button"
                aria-label="Faaliyet alanlarını aç/kapat"
                aria-expanded={isAccordionOpen}
                onClick={() => setIsAccordionOpen((open) => !open)}
                className="p-4 hover:text-orange-500"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isAccordionOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                isAccordionOpen ? "max-h-[80rem]" : "max-h-0"
              }`}
            >
              <ul className="pb-2 pl-4">
                {faaliyetAlanlari.map((alan) => (
                  <li key={alan.slug}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/faaliyet-alanlarimiz/${alan.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block flex-1 py-2 text-sm text-gray-300 hover:text-orange-500"
                      >
                        {alan.title}
                      </Link>
                      <button
                        type="button"
                        aria-label={`${alan.title} alt hizmetlerini aç/kapat`}
                        aria-expanded={openMobileService === alan.slug}
                        onClick={() =>
                          setOpenMobileService((current) =>
                            current === alan.slug ? null : alan.slug
                          )
                        }
                        className="p-2 text-gray-400 hover:text-orange-500"
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMobileService === alan.slug ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {openMobileService === alan.slug && (
                      <ul className="mb-2 border-l border-gray-700 pl-4">
                        {alan.subServices.map((sub) => (
                          <li key={sub.slug}>
                            <Link
                              href={`/faaliyet-alanlarimiz/${alan.slug}/${sub.slug}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-2 text-sm text-gray-400 hover:text-orange-500"
                            >
                              {sub.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/iletisim"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block py-4 font-medium transition-colors hover:text-orange-500 ${
                isActive("/iletisim") ? "text-orange-500" : ""
              }`}
            >
              İletişim
            </Link>
          </li>
        </ul>

        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-5 text-gray-200">
            <Link
              href="https://www.instagram.com/5mfactormuhendislik/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-orange-500"
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
          <Link
            href="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600"
          >
            Teklif Al
          </Link>
        </div>
      </div>
    </header>
  );
}
