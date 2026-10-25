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
    category: "Doğal Gaz Sistemleri",
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
    category: "Endüstriyel ve konfor HVAC (Isıtma, Havalandırma ve Şartlandırma) Sistemleri",
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
    category: "Endüstriyel Proses Tesisatları",
    date: "2026-07-10",
    author: "5M Factor Mühendislik",
    content: [
      "Endüstriyel tesislerde plansız duruşların en büyük nedeni, ihmal edilen periyodik bakımdır. Sincan ve Başkent OSB'deki tesislerde yürüttüğümüz bakım programlarında, üretici şartnamelerine uygun kontrol takvimleri oluşturarak olası arızaları oluşmadan tespit ediyoruz.",
      "Periyodik bakım planlaması, ekipmanların kritiklik derecesine göre önceliklendirilmelidir. Üretim sürekliliğini doğrudan etkileyen ekipmanlar için daha sık kontrol aralıkları belirlenirken, yedekli sistemlerde bakım periyotları esnetilebilir.",
      "Yıllık genel revizyon çalışmaları, ekipmanların sökülüp detaylı incelenmesinden aşınan parçaların yenilenmesine kadar geniş bir kapsamı içerir. Revizyon sonrası hazırlanan raporlar, tesis yöneticilerine ekipmanların güncel durumu hakkında şeffaf bilgi sağlar.",
      "7/24 ulaşılabilir arıza müdahale hattı, beklenmedik durumlarda üretim kaybını en aza indirmenin anahtarıdır. 5M Factor Mühendislik olarak Ankara genelindeki endüstriyel tesislerde bu yaklaşımla uzun ömürlü ve verimli bir işletme süreci sunuyoruz.",
    ],
  },
  {
    slug: "basincli-hava-kacaklarini-azaltmanin-yollari",
    title: "Ankara'daki Endüstriyel Tesislerde Basınçlı Hava Kaçaklarını Azaltmanın Yolları",
    excerpt: "Ankara'daki fabrikalarda basınçlı hava en pahalı enerji türlerinden biridir. Kaçakları tespit etmek ve gidermek, kompresör maliyetlerini düşürmenin en hızlı yoludur.",
    image: "https://images.unsplash.com/photo-1737874132953-b39a4812875d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Endüstriyel Tesiste Hava Tankı ve Vidalı Kompresör Sistemi",
    category: "Basınçlı Hava Tesisatları",
    date: "2026-09-18",
    content: [
      "Basınçlı hava, birçok üretim tesisinde pnömatik makinelerden boya hatlarına kadar geniş bir alanda kullanılır. Ancak üretimi en pahalı enerji türlerinden biri olması nedeniyle, sistemdeki küçük kaçaklar bile zamanla ciddi bir elektrik maliyetine dönüşür. Özellikle uzun yıllardır işletmede olan hatlarda, bakımı aksayan bağlantı noktalarından sürekli hava kaybı yaşanır.",
      "Kaçakları azaltmanın ilk adımı doğru tespittir. Ultrasonik kaçak dedektörleri, kulakla duyulmayan sızıntıları bile üretim sırasında bulabilir. Tarama; hat bağlantıları, hızlı kuplörler, filtre ve kurutucu çıkışları, drenaj vanaları ve hortum uçları gibi en sık kaçak görülen noktalarda yoğunlaşmalıdır. Tespit edilen kaçaklar etiketlenmeli, konumları ve tahmini kayıp seviyeleri kayıt altına alınmalıdır.",
      "İkinci adım, dağıtım hattının tasarımını gözden geçirmektir. Halka tipi hat, tüm noktalarda dengeli basınç sağlar; yetersiz çaplı veya çok dirsekli hatlar ise basınç kaybı yaratıp kompresörün gereksiz yüksek basınçta çalışmasına neden olur. Basınç ayarının ihtiyaç duyulan en düşük seviyeye çekilmesi, hem kaçak miktarını hem de enerji tüketimini azaltır.",
      "Üçüncü adım, düzenli bakım programıdır. Filtre elemanlarının zamanında değişmesi, kondens tahliyelerinin kontrolü ve kurutucu performansının izlenmesi sistemin verimini korur. Çoklu kompresör bulunan tesislerde ana kontrolör ile basınç bandının daraltılması ve değişken devirli kompresörlerin doğru devreye alınması da önemli tasarruf sağlar.",
      "5M Factor Mühendislik olarak Ankara ve çevresindeki tesislerde kompresör odası tasarımından dağıtım hatlarına, kaçak taramasından periyodik bakıma kadar basınçlı hava sistemlerinin verimli işletilmesi için destek veriyoruz. Tesisinizdeki sistemi birlikte değerlendirmek için bizimle iletişime geçebilirsiniz.",
    ],
    author: "5M Factor Mühendislik",
  },
  {
    slug: "yangin-sprinkler-sistemi-secerken-dikkat-edilecekler",
    title: "Ankara'da Yangın Sprinkler Sistemi Seçerken Dikkat Edilmesi Gerekenler",
    excerpt: "Ankara'daki depo, fabrika ve ticari binalarda sprinkler sistemi; tehlike sınıfı, depolama yüksekliği ve pompa kapasitesi gibi kriterlere göre projelendirilmelidir.",
    image: "https://images.unsplash.com/photo-1687694820364-9d250c054cb2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Tavan Altı Kırmızı Sprinkler Boru Hattı Montajı",
    category: "Yangından Korunma ve Söndürme Sistemleri",
    date: "2026-10-02",
    content: [
      "Sprinkler sistemleri, yangını başladığı noktada otomatik olarak algılayıp söndüren veya kontrol altına alan aktif koruma sistemleridir. Depo, fabrika, otel ve alışveriş merkezi gibi yapılarda bu sistemin doğru projelendirilmesi, can ve mal güvenliği açısından kritik öneme sahiptir.",
      "Projelendirmenin ilk kriteri yapının tehlike sınıfıdır. Yanıcı yükü düşük ofis alanları ile yüksek raflı depolar veya yanıcı sıvı içeren üretim alanları için gereken su yoğunluğu ve koruma alanı birbirinden çok farklıdır. Depolama yüksekliği ve istif düzeni de başlık seçimini ve hesaplanan debiyi doğrudan etkiler.",
      "İkinci kriter sistem tipidir. Isıtılan alanlarda yaş borulu sistemler tercih edilirken, donma riski bulunan alanlarda kuru borulu veya ön tepkili sistemler kullanılır. Her sistem tipinin alarm vanası istasyonu, test ve drenaj düzeni farklıdır; bu nedenle işletme koşulları baştan netleştirilmelidir.",
      "Üçüncü kriter, sistemi besleyen pompa ve su deposu kapasitesidir. Sprinkler hesabında belirlenen debi ve basıncı gerekli süre boyunca sağlayamayan bir pompa grubu, sistemin yangın anında yetersiz kalmasına yol açar. Elektrik kesintisi ihtimaline karşı yedekli veya dizel pompa seçeneği de değerlendirilmelidir.",
      "Son olarak sistemin devreye alma testleri ve periyodik bakımı unutulmamalıdır. Basınç ve akış testleri, alarm vanası fonksiyon kontrolleri ve boru hatlarının düzenli denetimi sistemin her an hazır olmasını sağlar. 5M Factor Mühendislik olarak yangından korunma projelerinde keşiften itfaiye onay sürecine, uygulamadan periyodik bakıma kadar destek veriyoruz.",
    ],
    author: "5M Factor Mühendislik",
  },
  {
    slug: "kizgin-yag-mi-buhar-mi-proses-isitmada-dogru-secim",
    title: "Kızgın Yağ mı, Buhar mı? Ankara'daki Tesisler İçin Proses Isıtmada Doğru Seçim",
    excerpt: "Ankara ve Başkent OSB'deki tesislerde proses ısıtma için kızgın yağ ve buhar sistemleri farklı avantajlar sunar. Doğru tercihi nasıl yaparsınız?",
    image: "https://images.unsplash.com/photo-1707249907742-4d4984281f3a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Endüstriyel Isıtma Kazanı ve Proses Boru Hattı Vanaları",
    category: "Kızgın Yağ, Su, Buhar Tesisatları",
    date: "2026-10-16",
    content: [
      "Tekstil, gıda, ahşap, kimya ve ambalaj gibi sektörlerde birçok proses, yüksek sıcaklıkta ve kararlı bir ısı kaynağına ihtiyaç duyar. Bu ihtiyacı karşılamak için en sık tercih edilen iki yöntem kızgın yağ ve buhar sistemleridir. Doğru seçim; proses sıcaklığına, ısı yüküne ve tesisin işletme alışkanlıklarına bağlıdır.",
      "Kızgın yağ sistemlerinin en büyük avantajı, düşük basınçta yüksek sıcaklıklara ulaşabilmesidir. Yüksek sıcaklık gereken presler, kurutucular ve laminasyon hatlarında bu özellik, sistemin daha güvenli ve basit işletilmesini sağlar. Donma ve korozyon sorunu bulunmaması da bakım yükünü azaltır. Buna karşılık yağın zamanla oksidasyona uğraması nedeniyle düzenli analiz ve filtre bakımı gerekir.",
      "Buhar ise hızlı ısı transferi, kolay dağıtım ve doğrudan temas gerektiren uygulamalarda öne çıkar. Gıda üretimi, sterilizasyon ve kimya proseslerinde buharın hem enerji taşıyıcı hem de proses ortamı olarak kullanılabilmesi önemli bir esneklik sağlar. Ancak besleme suyu arıtması, kondens geri kazanımı ve basınçlı kap mevzuatı gibi ek işletme gereklilikleri vardır.",
      "Seçim yaparken yalnızca ilk yatırım maliyetine değil, yakıt tüketimi, bakım giderleri, personel gereksinimi ve güvenlik koşullarına da bakılmalıdır. Isı geri kazanımı, kazan verimi ve hat yalıtımı gibi iyileştirmeler, her iki sistemde de işletme maliyetini belirgin şekilde düşürür.",
      "5M Factor Mühendislik olarak proses ısıtma ihtiyacınızı yerinde inceliyor, kızgın yağ, kızgın su ve buhar seçeneklerini karşılaştırmalı olarak değerlendiriyor; seçilen sistemin projelendirmesini, imalatını ve devreye almasını tek elden yürütüyoruz.",
    ],
    author: "5M Factor Mühendislik",
  },
];
