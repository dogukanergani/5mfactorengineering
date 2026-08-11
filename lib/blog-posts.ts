export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  author: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "endustriyel-dogalgaz-tesisatinda-dikkat-edilmesi-gereken-5-kural",
    title: "Endüstriyel Doğalgaz Tesisatında Dikkat Edilmesi Gereken 5 Kural",
    excerpt:
      "Ankara Başkent OSB'de faaliyet gösteren endüstriyel tesislerde doğalgaz altyapısının güvenli ve verimli çalışması için proje aşamasından işletmeye almaya kadar dikkat edilmesi gereken 5 temel kural.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1200&auto=format&fit=crop",
    imageAlt:
      "Ankara Başkent OSB Endüstriyel Doğalgaz Tesisatı Güvenlik Kontrolü",
    category: "Doğalgaz Sistemleri",
    date: "2026-06-12",
    author: "5M Factor Mühendislik",
    content: [
      "Endüstriyel tesislerde doğalgaz altyapısı, üretim sürekliliğini doğrudan etkileyen kritik bir sistemdir. Ankara ve Başkent OSB'deki projelerimizde edindiğimiz tecrübeyle, güvenli bir doğalgaz tesisatının temelinde doğru projelendirme, kaliteli malzeme seçimi ve düzenli denetim yer alır.",
      "Birincisi, iç tesisat projesi ilgili dağıtım şirketi ve EPDK mevzuatına tam uyumlu şekilde hazırlanmalı; kapasite hesapları tesisin gelecekteki büyüme ihtiyaçlarını da göz önünde bulundurmalıdır. İkincisi, kaynaklı ve mekanik bağlantılarda kullanılan malzemeler uluslararası standartlara uygun seçilmeli ve sertifikalı ekipler tarafından uygulanmalıdır.",
      "Üçüncüsü, her hat devreye alınmadan önce basınç ve sızdırmazlık testlerinden geçirilmelidir. Dördüncüsü, yüksek kapasiteli hatlarda basınç düşürme ve ölçüm istasyonları (RMS/RS) periyodik olarak denetlenmelidir. Beşincisi ise, periyodik bakım ve kaçak testi programlarının aksatılmadan sürdürülmesidir.",
      "Bu beş kurala uyan tesisler, hem iş güvenliği hem de enerji verimliliği açısından uzun vadede önemli kazanımlar elde eder. 5M Factor Mühendislik olarak Ankara genelindeki doğalgaz projelerinde bu prensipleri titizlikle uyguluyoruz.",
    ],
  },
  {
    slug: "ankara-fabrika-mekanik-tesisat-kurulum-surecleri",
    title: "Ankara Fabrika Mekanik Tesisat Kurulum Süreçleri",
    excerpt:
      "Ankara'da bir fabrikada mekanik tesisat kurulumu keşiften devreye almaya kadar hangi aşamalardan geçer? Sincan ve Başkent OSB'deki projelerimizden edindiğimiz süreç rehberi.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Sincan Fabrika Mekanik Tesisat Kurulum Süreci Boru Hattı",
    category: "Mekanik Tesisat Sistemleri",
    date: "2026-06-26",
    author: "5M Factor Mühendislik",
    content: [
      "Bir fabrikada mekanik tesisat kurulumu; ısıtma, soğutma, havalandırma (HVAC), sıhhi tesisat ve yangın söndürme sistemleri gibi birçok disiplini bir arada yönetmeyi gerektirir. Ankara ve Sincan bölgesindeki fabrika projelerimizde süreci dört ana aşamada yürütüyoruz.",
      "İlk aşama saha keşfi ve ihtiyaç analizidir. Üretim akışı, kapasite hedefleri ve enerji verimliliği kriterleri bu aşamada netleştirilir. İkinci aşamada teknik çizimler hazırlanır; kalorifer tesisatı, klima santralleri, VRF/VRV sistemleri ve pompa istasyonları gibi ekipmanların yerleşimi üreticilerin teknik şartnamelerine uygun şekilde planlanır.",
      "Üçüncü aşama uygulama ve montajdır. Saha ekiplerimiz kaynak, boru montajı ve izolasyon işlerini yürürlükteki yönetmeliklere tam uyumlu olarak gerçekleştirir. Endüstriyel tesislerde proses suyu, basınçlı hava ve buhar hatları gibi özel ihtiyaçlar da bu aşamada devreye girer.",
      "Son aşama devreye alma ve testtir. Basınç kontrolleri ve performans testleri tamamlanmadan hiçbir sistem üretime açılmaz. Teslimat sonrasında sunduğumuz periyodik bakım hizmetleriyle, Ankara genelindeki fabrikaların mekanik tesisat performansını uzun vadede koruma altına alıyoruz.",
    ],
  },
  {
    slug: "sincan-baskent-osb-endustriyel-tesis-bakiminda-kapsamli-rehber",
    title: "Sincan ve Başkent OSB'de Endüstriyel Tesis Bakımı: Kapsamlı Rehber",
    excerpt:
      "Sincan ve Başkent OSB'deki endüstriyel tesislerde periyodik bakımın üretim sürekliliğine etkisi, revizyon planlaması ve arıza müdahale süreçleri hakkında kapsamlı bir rehber.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Sincan Endüstriyel Tesis Periyodik Bakım Denetimi",
    category: "Bakım, Onarım Ve Revizyon",
    date: "2026-07-10",
    author: "5M Factor Mühendislik",
    content: [
      "Endüstriyel tesislerde plansız duruşların en büyük nedeni, ihmal edilen periyodik bakımdır. Sincan ve Başkent OSB'deki tesislerde yürüttüğümüz bakım programlarında, üretici şartnamelerine uygun kontrol takvimleri oluşturarak olası arızaları oluşmadan tespit ediyoruz.",
      "Periyodik bakım planlaması, ekipmanların kritiklik derecesine göre önceliklendirilmelidir. Üretim sürekliliğini doğrudan etkileyen ekipmanlar için daha sık kontrol aralıkları belirlenirken, yedekli sistemlerde bakım periyotları esnetilebilir.",
      "Yıllık genel revizyon çalışmaları, ekipmanların sökülüp detaylı incelenmesinden aşınan parçaların yenilenmesine kadar geniş bir kapsamı içerir. Revizyon sonrası hazırlanan raporlar, tesis yöneticilerine ekipmanların güncel durumu hakkında şeffaf bilgi sağlar.",
      "7/24 ulaşılabilir arıza müdahale hattı, beklenmedik durumlarda üretim kaybını en aza indirmenin anahtarıdır. 5M Factor Mühendislik olarak Ankara genelindeki endüstriyel tesislerde bu yaklaşımla uzun ömürlü ve verimli bir işletme süreci sunuyoruz.",
    ],
  },
];
