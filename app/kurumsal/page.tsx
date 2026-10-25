import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hakkımızda – Ankara Mühendislik ve Taahhüt Firması",
  description:
    "Sincan Başkent OSB merkezli 5M Factor Mühendislik'in Ankara'daki geçmişi, vizyonu ve misyonu. HVAC, doğal gaz, yangın ve proses tesisatlarında güvenilir mühendislik ortağı.",
  alternates: {
    canonical: "/kurumsal",
  },
};

export default function KurumsalPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="px-6 pb-12 pt-10 sm:pt-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hakkımızda
          </h1>
          <span className="mt-4 block h-1 w-16 rounded-full bg-orange-500" />
        </div>
      </section>

      <section className="flex-1 bg-paper px-6 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-base text-base leading-7 text-gray-600">
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
            <p className="mt-4 text-base leading-7 text-gray-600">
              <span className="font-semibold text-gray-900">Vizyonumuz</span>,
              mühendislik ve inşaat sektöründe bölgemizin en çok tercih edilen
              çözüm ortağı olmak; yenilikçi mühendislik yaklaşımlarını
              yerinde uygulama disipliniyle birleştirerek her ölçekten
              endüstriyel tesise değer katmaktır. Projelerimizde teknolojik
              gelişmeleri yakından takip ederek, hem verimliliği hem de iş
              güvenliğini en üst seviyede tutmayı amaçlıyoruz.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
              <span className="font-semibold text-gray-900">Misyonumuz</span>{" "}
              ise, planlama aşamasından anahtar teslim uygulamaya kadar
              tüm süreçlerde şeffaf iletişim kurmak, zamanında teslimat
              taahhüdümüzü koşulsuz yerine getirmek ve müşterilerimizin uzun
              vadeli iş ortağı olmaktır. Deneyimli mühendis kadromuz ve saha
              ekiplerimizle, her projeyi kendi tesisimizmiş gibi sahiplenerek
              yürütüyoruz.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-600">
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

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-300 shadow-lg">
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
