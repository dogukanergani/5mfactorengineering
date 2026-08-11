import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { faaliyetAlanlari } from "@/lib/faaliyet-alanlari";
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
    default: "5M Factor Mühendislik | Ankara Doğalgaz ve Mekanik Tesisat",
  },
  description: siteConfig.description,
  keywords: [
    "Ankara mühendislik firması",
    "Ankara doğalgaz tesisatı",
    "mekanik tesisat Ankara",
    "Sincan endüstriyel tesisler",
    "Başkent OSB taahhüt",
    "çelik konstrüksiyon",
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
    title: "5M Factor Mühendislik | Ankara Doğalgaz ve Mekanik Tesisat",
    description: siteConfig.description,
    images: [
      {
        url: "/logo.png",
        width: 1080,
        height: 1080,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5M Factor Mühendislik | Ankara Doğalgaz ve Mekanik Tesisat",
    description: siteConfig.description,
    images: ["/logo.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor"],
  "@id": siteConfig.organizationId,
  name: siteConfig.name,
  image: `${siteConfig.url}/logo.png`,
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
      <body className="flex min-h-full flex-col bg-gray-900 text-gray-200">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
