import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "5M Factor Mühendislik'in Ankara merkezli kurumsal geçmişi, vizyonu ve misyonu hakkında bilgi alın. Başkent OSB'den tüm Türkiye'ye mühendislik ve taahhüt hizmetleri.",
  alternates: {
    canonical: "/kurumsal",
  },
};

export default function KurumsalPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-16 pt-28 sm:pt-32 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Hakkımızda
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-300">
              <span className="font-semibold text-orange-500">
                5M Factor Mühendislik
              </span>{" "}
              olarak, doğalgaz sistemlerinden mekanik tesisata, endüstriyel
              imalattan projelendirme ve taahhüde kadar mühendislik ve inşaat
              sektörünün pek çok alanında müşterilerimize güvenilir ve
              sürdürülebilir çözümler sunuyoruz. Kuruluşumuzdan bu yana
              edindiğimiz saha tecrübesini, güçlü teknik altyapımızla
              birleştirerek her projede{" "}
              <span className="font-semibold text-orange-500">
                kalite
              </span>{" "}
              ve güvenlikten ödün vermeden çalışıyoruz.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-300">
              <span className="font-semibold text-white">Vizyonumuz</span>,
              mühendislik ve inşaat sektöründe bölgemizin en çok tercih edilen
              çözüm ortağı olmak; yenilikçi mühendislik yaklaşımlarını
              yerinde uygulama disipliniyle birleştirerek her ölçekten
              endüstriyel tesise değer katmaktır. Projelerimizde teknolojik
              gelişmeleri yakından takip ederek, hem verimliliği hem de iş
              güvenliğini en üst seviyede tutmayı amaçlıyoruz.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-300">
              <span className="font-semibold text-white">Misyonumuz</span>{" "}
              ise, planlama aşamasından anahtar teslim uygulamaya kadar
              tüm süreçlerde şeffaf iletişim kurmak, zamanında teslimat
              taahhüdümüzü koşulsuz yerine getirmek ve müşterilerimizin uzun
              vadeli iş ortağı olmaktır. Deneyimli mühendis kadromuz ve saha
              ekiplerimizle, her projeyi kendi tesisimizmiş gibi sahiplenerek
              yürütüyoruz.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-300">
              Kalite anlayışımızın merkezinde{" "}
              <span className="font-semibold text-orange-500">
                güvenlik
              </span>
              , standartlara tam uyum ve sürekli iyileştirme yer alır. Ulusal
              ve uluslararası mühendislik standartlarına uygun uygulamalarımız
              ile, teslim ettiğimiz her tesisin uzun ömürlü ve verimli
              çalışmasını garanti altına alıyoruz.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-700 shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
              alt="Ankara Başkent OSB Şantiyesinde 5M Factor Mühendislik ve Taahhüt Ekibi"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
