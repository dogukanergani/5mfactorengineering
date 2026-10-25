import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import { services as faaliyetAlanlari } from "@/lib/servicesData";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    template: "%s | 5M Factor Mühendislik",
    default: "5M Factor Mühendislik | Ankara HVAC, Doğal Gaz, Yangın ve Tesisat Mühendisliği",
  },
  description: siteConfig.description,
  keywords: [
    "Ankara mühendislik firması",
    "Ankara HVAC firması",
    "Ankara doğal gaz tesisatı",
    "Ankara yangın söndürme sistemleri",
    "Ankara sıhhi tesisat",
    "Ankara basınçlı hava sistemleri",
    "Ankara endüstriyel otomasyon",
    "Ankara endüstriyel proses tesisatı",
    "Sincan endüstriyel tesisler",
    "Başkent OSB taahhüt",
    "Ostim mühendislik",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "5M Factor Mühendislik | Ankara HVAC, Doğal Gaz, Yangın ve Tesisat Mühendisliği",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "5M Factor Mühendislik | Ankara HVAC, Doğal Gaz, Yangın ve Tesisat Mühendisliği",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  alternateName: ["5M Factor", "5M Factor Mühendislik Ankara"],
  inLanguage: "tr-TR",
  publisher: { "@id": siteConfig.organizationId },
};

const navigationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { name: "Hakkımızda", url: "/kurumsal" },
    { name: "Faaliyet Alanlarımız", url: "/faaliyet-alanlarimiz" },
    ...faaliyetAlanlari.map((alan) => ({
      name: alan.title,
      url: `/faaliyet-alanlarimiz/${alan.slug}`,
    })),
    { name: "Projeler", url: "/projeler" },
    { name: "Blog", url: "/blog" },
    { name: "İletişim", url: "/iletisim" },
  ].map((item) => ({
    "@type": "SiteNavigationElement",
    name: item.name,
    url: `${siteConfig.url}${item.url}`,
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": siteConfig.organizationId,
  name: siteConfig.name,
  description: siteConfig.description,
  image: `${siteConfig.url}/logo.png`,
  logo: `${siteConfig.url}/logo.png`,
  knowsAbout: faaliyetAlanlari.map((alan) => alan.seoName),
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.streetAddress,
    addressLocality: siteConfig.address.addressLocality,
    addressRegion: siteConfig.address.addressRegion,
    addressCountry: siteConfig.address.addressCountry,
  },
  areaServed: siteConfig.areaServed,
  sameAs: siteConfig.sameAs,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "13:00",
    },
  ],
  makesOffer: faaliyetAlanlari.map((alan) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: alan.title,
      url: `${siteConfig.url}/faaliyet-alanlarimiz/${alan.slug}`,
    },
  })),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-gray-700">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationJsonLd).replace(/</g, "\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
