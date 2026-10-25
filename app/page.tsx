import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: {
    absolute:
      "5M Factor Mühendislik | Ankara HVAC, Doğal Gaz, Yangın ve Tesisat Mühendisliği",
  },
  description:
    "Ankara Sincan Başkent OSB merkezli 5M Factor Mühendislik: HVAC, doğal gaz, yangın söndürme, sıhhi tesisat, basınçlı hava ve proses tesisatlarında projelendirme ve anahtar teslim uygulama.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}
