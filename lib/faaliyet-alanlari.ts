export type FaaliyetAlani = {
  slug: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
};

export const faaliyetAlanlari: FaaliyetAlani[] = [
  {
    slug: "dogalgaz-sistemleri",
    title: "Doğalgaz Sistemleri",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Ankara Başkent OSB Endüstriyel Doğalgaz Tesisatı Kurulumu",
    description: [
      "5M Factor Mühendislik olarak, konut, ticari ve endüstriyel tesisler için doğalgaz altyapı sistemlerinin projelendirilmesinden anahtar teslim uygulamasına kadar tüm süreçleri tek çatı altında yürütüyoruz. İlgili dağıtım şirketleri ve EPDK mevzuatına tam uyumlu iç tesisat projeleri hazırlıyor, saha uygulamalarını yetkin ve sertifikalı ekiplerimizle gerçekleştiriyoruz.",
      "Doğalgaz hatlarının döşenmesinden basınç testlerine, kombi ve kazan dairesi bağlantılarından endüstriyel yakma sistemlerine kadar her aşamada güvenlik önceliğimizdir. Kaynaklı ve mekanik bağlantılarda kullanılan malzemeler uluslararası standartlara uygun olarak seçilir, her hat devreye alınmadan önce sızdırmazlık testlerinden geçirilir.",
      "Endüstriyel tesislerde yüksek kapasiteli doğalgaz besleme hatları, basınç düşürme ve ölçüm istasyonları (RMS/RS) projelerinde edindiğimiz tecrübeyle, üretim sürekliliğini aksatmadan güvenli ve verimli bir enerji altyapısı sunuyoruz. Periyodik bakım ve kaçak testi hizmetlerimizle sistemlerin uzun ömürlü ve mevzuata uygun kalmasını garanti altına alıyoruz.",
      "Proje aşamasından işletmeye alma sürecine kadar müşterilerimizle şeffaf iletişim kurarak, doğalgaz sistemlerinde hem maliyet etkin hem de güvenli çözümler üretmeyi ilke ediniyoruz.",
    ],
  },
  {
    slug: "mekanik-tesisat-sistemleri",
    title: "Mekanik Tesisat Sistemleri",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sincan Fabrika Mekanik Tesisat Projesi Boru Montajı",
    description: [
      "Isıtma, soğutma, havalandırma (HVAC), sıhhi tesisat ve yangın söndürme sistemleri gibi binaların ve endüstriyel tesislerin can damarı sayılan mekanik altyapı çözümlerini uçtan uca tasarlıyor ve uyguluyoruz. Enerji verimliliğini ön planda tutan sistem seçimleriyle, işletme maliyetlerini düşüren sürdürülebilir çözümler sunuyoruz.",
      "Kalorifer tesisatı, klima santralleri, VRF/VRV sistemleri, basınçlandırma ve pompa istasyonları gibi kritik ekipmanların montajında, üreticilerin teknik şartnamelerine ve yürürlükteki yönetmeliklere tam uyum sağlıyoruz. Saha ekiplerimiz, kaynak ve boru montajından izolasyon uygulamalarına kadar her detayı titizlikle yürütür.",
      "Endüstriyel tesislerde proses suyu, basınçlı hava ve buhar hatları gibi özel mekanik tesisat ihtiyaçlarında da yetkinliğimizi kanıtlamış durumdayız. Devreye alma öncesinde yapılan kapsamlı testler ve basınç kontrolleri sayesinde, sistemlerin ilk günden itibaren kesintisiz çalışmasını sağlıyoruz.",
      "Proje sonrası sunduğumuz periyodik bakım hizmetleriyle, mekanik tesisatınızın performansını ve enerji verimliliğini uzun vadede koruma altına alıyoruz.",
    ],
  },
  {
    slug: "projelendirme-ve-taahhut",
    title: "Projelendirme ve Taahhüt",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Ankara Mühendislik Projelendirme ve Taahhüt Hizmetleri Teknik Çizim",
    description: [
      "Mühendislik projelerinin başarısı, doğru planlama ve titiz bir tasarım sürecinden geçer. 5M Factor Mühendislik olarak fizibilite çalışmalarından uygulama projelerine, keşif-metraj hazırlığından ihale dosyalarına kadar projelendirme sürecinin her aşamasında müşterilerimizin yanında yer alıyoruz.",
      "Deneyimli proje mühendislerimiz, güncel mühendislik yazılımları ve saha tecrübesini birleştirerek, hem teknik olarak sağlam hem de maliyet açısından optimize edilmiş çözümler üretir. Statik, mekanik ve elektrik disiplinlerini bir arada değerlendiren bütüncül bir yaklaşımla, uygulamada karşılaşılabilecek sorunları daha proje aşamasında öngörüp ortadan kaldırıyoruz.",
      "Taahhüt hizmetlerimizde, anahtar teslim proje yönetimi anlayışıyla; planlama, tedarik, saha uygulaması ve devreye alma süreçlerini tek bir sorumluluk altında topluyoruz. Bu sayede müşterilerimiz tek bir muhatapla çalışarak zaman ve kaynak tasarrufu sağlar.",
      "Sözleşme aşamasında belirlenen bütçe ve takvime bağlı kalarak, şeffaf raporlama ve düzenli saha denetimleriyle projelerin zamanında ve hedeflenen kalitede tamamlanmasını garanti ediyoruz.",
    ],
  },
  {
    slug: "endustriyel-imalat-ve-montaj",
    title: "Endüstriyel İmalat ve Montaj",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Başkent OSB Çelik Konstrüksiyon Endüstriyel İmalat ve Montaj Çalışması",
    description: [
      "Çelik konstrüksiyondan boru hatlarına, ekipman iskeletlerinden özel imalat parçalarına kadar geniş bir yelpazede endüstriyel imalat hizmeti sunuyoruz. Atölyemizde ve sahada gerçekleştirdiğimiz kaynaklı imalatlar, ilgili kaynak prosedürleri (WPS/PQR) ve kalite standartlarına uygun olarak sertifikalı kaynakçılarımız tarafından yürütülür.",
      "Endüstriyel ekipmanların montajında; hizalama, kaldırma ve yerleştirme operasyonlarından mekanik bağlantıların sıkılık kontrolüne kadar her adımda iş güvenliği ve kalite kontrol prosedürlerini eksiksiz uyguluyoruz. Ağır ekipman montajı gerektiren projelerde deneyimli saha ekiplerimiz ve uygun ekipman parkurumuzla güvenli bir uygulama süreci garanti ediyoruz.",
      "İmalat sürecinde kullanılan malzemelerin sertifikasyonundan kaynak dikişlerinin tahribatsız muayenesine (NDT) kadar tüm kalite kontrol adımlarını belgeleyerek, teslim ettiğimiz her imalatın izlenebilir ve denetlenebilir olmasını sağlıyoruz.",
      "Endüstriyel imalat ve montaj projelerimizde, üretim sürekliliğini etkilemeyecek şekilde planlanmış iş programlarıyla, tesislerinizin duruş sürelerini minimumda tutmayı hedefliyoruz.",
    ],
  },
  {
    slug: "endustriyel-tesisler",
    title: "Endüstriyel Tesisler",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Sincan Endüstriyel Tesis İnşaat ve Kapasite Artırım Sahası",
    description: [
      "Üretim tesislerinden depolama alanlarına, enerji santrallerinden proses tesislerine kadar farklı ölçek ve karmaşıklıktaki endüstriyel yapıların mühendislik, tasarım ve uygulama süreçlerinde uzun yıllara dayanan tecrübemizi müşterilerimize sunuyoruz.",
      "Tesis tasarımında; üretim akışının verimliliğini, iş güvenliği gereksinimlerini ve gelecekteki kapasite artışlarını bir arada değerlendiren esnek çözümler üretiyoruz. Altyapıdan üst yapıya, mekanik ve elektrik tesisattan otomasyon entegrasyonuna kadar tüm disiplinleri koordine ederek bütüncül bir proje yönetimi sağlıyoruz.",
      "Mevcut tesislerde gerçekleştirdiğimiz kapasite artırım, modernizasyon ve genişletme projelerinde, üretim sürekliliğini koruyacak şekilde planlanmış aşamalı uygulama yöntemleri kullanıyoruz. Bu yaklaşım, yatırım geri dönüşünü hızlandırırken operasyonel riskleri de en aza indiriyor.",
      "Endüstriyel tesis projelerimizde çevresel sürdürülebilirlik ve enerji verimliliğini de tasarım kriterlerimiz arasına dahil ederek, uzun vadede daha düşük işletme maliyetine sahip tesisler ortaya çıkarıyoruz.",
    ],
  },
  {
    slug: "bakim-onarim-ve-revizyon",
    title: "Bakım, Onarım Ve Revizyon",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Ankara Fabrika Ekipmanları Periyodik Bakım Onarım ve Revizyon Çalışması",
    description: [
      "Mekanik ve endüstriyel sistemlerin uzun ömürlü ve verimli çalışmasının anahtarı, düzenli bakım ve zamanında müdahaledir. 5M Factor Mühendislik olarak periyodik bakım planlarından acil arıza müdahalesine, büyük revizyon çalışmalarından ekipman rehabilitasyonuna kadar geniş bir yelpazede bakım-onarım hizmeti sunuyoruz.",
      "Deneyimli teknik ekibimiz, üretici şartnamelerine uygun periyodik bakım programları hazırlayarak, arıza oluşmadan önce olası sorunları tespit eder ve giderir. Bu proaktif yaklaşım, plansız duruşları azaltarak tesislerinizin üretim sürekliliğini korumasını sağlar.",
      "Yıllık genel revizyon çalışmalarında; ekipmanların sökülüp detaylı incelenmesinden aşınan parçaların yenilenmesine, performans testlerinden yeniden devreye almaya kadar tüm süreci titizlikle yönetiyoruz. Revizyon sonrası hazırladığımız raporlarla, ekipmanların güncel durumu ve gelecek bakım ihtiyaçları hakkında şeffaf bilgi sağlıyoruz.",
      "7/24 ulaşılabilir arıza müdahale hattımızla, beklenmedik durumlarda hızlı ve etkili çözümler sunarak müşterilerimizin operasyonel güvenini kazanmayı sürdürüyoruz.",
    ],
  },
];
