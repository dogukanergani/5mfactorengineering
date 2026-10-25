import type { NextConfig } from "next";

const retiredServices: Record<string, string> = {
  "dogalgaz-sistemleri": "/faaliyet-alanlarimiz/dogal-gaz",
  "mekanik-tesisat-sistemleri":
    "/faaliyet-alanlarimiz/endustriyel-ve-konfor-hvac",
  "projelendirme-ve-taahhut": "/faaliyet-alanlarimiz",
  "endustriyel-imalat-ve-montaj":
    "/faaliyet-alanlarimiz/endustriyel-proses",
  "endustriyel-tesisler": "/faaliyet-alanlarimiz/endustriyel-proses",
  "bakim-onarim-ve-revizyon": "/faaliyet-alanlarimiz",
};

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(retiredServices).map(([oldSlug, destination]) => ({
      source: `/faaliyet-alanlarimiz/${oldSlug}`,
      destination,
      permanent: true,
    }));
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
