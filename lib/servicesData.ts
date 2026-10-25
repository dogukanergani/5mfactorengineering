import { lowerKeep } from "@/lib/seo";

export type SubService = {
  slug: string;
  title: string;
  content: string[];
  image: string;
  imageAlt: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
  subServices: SubService[];
  faqs: ServiceFaq[];
  /** SEO için kısa ve aranabilir hizmet adı (başlık ve meta açıklamalarda kullanılır) */
  seoName: string;
};

const baseServices: Omit<Service, "seoName">[] = [
  {
    slug: "endustriyel-ve-konfor-hvac",
    title: "Endüstriyel ve konfor HVAC (Isıtma, Havalandırma ve Şartlandırma) Sistemleri",
    image:
      "https://images.unsplash.com/photo-1698479603408-1a66a6d9e80f?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Tesis HVAC İklimlendirme Sistemi Montajı",
    description: [
      "5M Factor Mühendislik olarak konfor ve endüstriyel ölçekte ısıtma, soğutma, havalandırma ve iklimlendirme (HVAC) sistemlerini projelendirmeden devreye almaya kadar tek çatı altında yürütüyoruz. Ofis, otel, hastane ve alışveriş merkezi gibi konfor uygulamalarında kullanıcı memnuniyetini; fabrika, depo ve üretim hatlarında ise proses gereksinimlerini öncelikli tutan çözümler üretiyoruz.",
      "Sistem seçiminde yük hesaplarını, enerji verimliliğini ve işletme maliyetini birlikte değerlendiriyoruz. Klima santralleri, chiller ve kazan gruplarından VRF/VRV sistemlerine, fan-coil ve havalandırma kanal şebekelerine kadar tüm ekipmanları üretici şartnamelerine ve yürürlükteki yönetmeliklere uygun biçimde monte ediyoruz.",
      "Endüstriyel tesislerde temiz oda, boya kabini, toz ve duman emişi gibi özel havalandırma ihtiyaçlarında sıcaklık, nem ve basınç kontrolünü hassas biçimde sağlıyoruz. Devreye alma sürecinde debi dengelemesi ve performans testlerini belgeleyerek sistemin ilk günden tasarım değerlerinde çalışmasını güvence altına alıyoruz.",
      "Proje sonrasında periyodik bakım ve enerji optimizasyonu hizmetleriyle HVAC sistemlerinizin ömrünü uzatıyor, işletme giderlerinizi düşürüyoruz.",
    ],
    subServices: [
      {
        slug: "klima-santrali-ve-havalandirma-sistemleri",
        title: "Klima Santrali ve Havalandırma Sistemleri",
        image:
          "https://images.unsplash.com/photo-1774290331891-5d759056c68d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Klima Santrali ve Havalandırma Kanalı Montajı",
        content: [
          "Klima santralleri, binaların ve üretim alanlarının taze hava, filtrasyon, ısıtma ve soğutma ihtiyacını karşılayan merkezi iklimlendirme sistemlerinin kalbidir. Doğru kapasitede seçilmeyen veya hatalı monte edilen bir santral; yüksek enerji tüketimi, gürültü ve konfor şikayetlerine yol açar.",
          "5M Factor Mühendislik, hava debisi ve basınç kaybı hesaplarına dayanan projelendirmeyle santral seçimini yapar; galvaniz sac kanal imalatı, izolasyon, damper ve difüzör montajını titizlikle gerçekleştirir. Isı geri kazanım üniteleri ile enerji maliyetlerini önemli ölçüde azaltan çözümler sunar.",
          "Montaj sonrasında hava debisi dengelemesi, filtre sınıfı kontrolü ve kaçak testleri yapılır; sonuçlar raporlanarak teslim edilir. Hastane, laboratuvar ve gıda üretimi gibi hijyen kritik alanlarda HEPA filtrasyon ve pozitif/negatif basınç uygulamaları da kapsamımızdadır.",
        ],
      },
      {
        slug: "vrf-vrv-ve-chiller-sistemleri",
        title: "VRF/VRV ve Chiller Sistemleri",
        image:
          "https://images.unsplash.com/photo-1776860153678-b204dccd0f65?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Çatıda VRF ve Chiller Soğutma Grubu Kurulumu",
        content: [
          "Orta ve büyük ölçekli binalarda merkezi soğutma ve ısıtma ihtiyacı, VRF/VRV veya su soğutmalı chiller sistemleriyle verimli biçimde karşılanır. Her iki teknoloji de bina tipine, kullanım profiline ve bütçeye göre farklı avantajlar sunar.",
          "Projelendirme aşamasında yük analizi yaparak en uygun sistemi öneriyoruz. Bakır boru hatlarının kaynağı ve vakumlanması, soğutucu akışkan şarjı, soğutma kulesi, pompa grubu ve hidrolik dengeleme işlemlerini üretici standartlarına uygun şekilde tamamlıyoruz.",
          "Bina otomasyon sistemleriyle entegre çalışan çözümlerimiz sayesinde sistem kullanım saatine ve doluluk durumuna göre otomatik ayarlanır, enerji tüketimi azalır. Devreye alma sonrası eğitim ve bakım planı da hizmetimize dahildir.",
        ],
      },
      {
        slug: "kazan-dairesi-ve-isitma-sistemleri",
        title: "Kazan Dairesi ve Isıtma Sistemleri",
        image:
          "https://images.unsplash.com/photo-1650551182991-b07558247564?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kazan Dairesi Isıtma Sistemi Boru ve Pompa Montajı",
        content: [
          "Kazan dairesi; konut sitelerinden fabrikalara kadar ısıtma ve sıcak su ihtiyacının karşılandığı kritik teknik alandır. Yoğuşmalı kazanlar, eşanjörler, genleşme tankları ve pompa gruplarının doğru seçimi hem güvenliği hem de yakıt tasarrufunu belirler.",
          "5M Factor Mühendislik, kazan dairesi projelendirmesi, ekipman montajı, baca ve yanma havası bağlantıları ile hidrolik şemanın uygulanmasını yürütür. Kalorifer, yerden ısıtma ve radyant ısıtma sistemlerini yönetmeliklere uygun olarak devreye alır.",
          "Mevcut kazan dairelerinde yaptığımız modernizasyon çalışmalarında verimsiz kazanlar yoğuşmalı sistemlerle değiştirilir, hava ve sıcaklık kontrolü eklenerek yakıt tüketimi düşürülür. Düzenli bakım sözleşmeleriyle sistem güvenliği sürekli kılınır.",
        ],
      },
    ],
    faqs: [
      {
        question: "HVAC projelendirme süreci ne kadar sürer?",
        answer:
          "Süre; yapının büyüklüğüne ve sistem karmaşıklığına göre değişir. Konfor uygulamalarında projelendirme genellikle birkaç hafta sürer. Endüstriyel tesislerde saha keşfi ve proses gereksinimlerinin netleştirilmesi ek süre gerektirebilir. Keşif sonrası net takvimi paylaşıyoruz.",
      },
      {
        question: "VRF sistemi mi, chiller sistemi mi tercih etmeliyim?",
        answer:
          "Bölge bazlı kontrol ve esnek montaj gerektiren orta ölçekli binalarda VRF, çok büyük kapasiteli ve merkezi sistemlerde ise chiller genellikle daha uygundur. Yük analizi ve bütçenize göre en doğru seçimi ücretsiz keşifte birlikte belirliyoruz.",
      },
      {
        question: "HVAC sistemleri için periyodik bakım gerekli mi?",
        answer:
          "Evet. Filtre değişimi, kondenser temizliği, soğutucu akışkan ve elektrik kontrolleri yılda en az iki kez yapılmalıdır. Düzenli bakım, enerji tüketimini düşürür, arıza riskini azaltır ve ekipman ömrünü uzatır.",
      },
    ],
  },
  {
    slug: "yangindan-korunma",
    title: "Yangından Korunma ve Söndürme Sistemleri",
    image:
      "https://images.unsplash.com/photo-1785682117611-586d39bfd5f2?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Yangından Korunma Sprinkler ve Yangın Hattı Montajı",
    description: [
      "Yangından korunma sistemleri, can ve mal güvenliğinin en önemli parçasıdır. 5M Factor Mühendislik, Binaların Yangından Korunması Hakkında Yönetmelik ve ilgili NFPA/TS EN standartlarına uygun olarak aktif ve pasif yangın koruma sistemlerini projelendirir, uygular ve devreye alır.",
      "Sprinkler, yangın dolabı, hidrant, köpüklü ve gazlı söndürme sistemlerinden yangın algılama ve alarm altyapısına kadar tüm ekipmanları bütüncül bir yaklaşımla ele alıyoruz. Yangın pompa odaları, su depoları ve ana besleme hatları, tesisinizin risk sınıfına göre hesaplanarak boyutlandırılır.",
      "Proje onayı için itfaiye müdürlüğü süreçlerinde teknik destek veriyor, uygulama sonrası işletme ruhsatı için gerekli test ve raporlamaları sunuyoruz. Endüstriyel tesislerde üretimi aksatmayacak aşamalı uygulama planları hazırlıyoruz.",
      "Kurulum sonrasında periyodik bakım, test ve yenileme hizmetleriyle sistemlerinizin her an hazır durumda kalmasını sağlıyoruz.",
    ],
    subServices: [
      {
        slug: "sprinkler-sistemleri",
        title: "Sprinkler Sistemleri",
        image:
          "https://images.unsplash.com/photo-1687694820364-9d250c054cb2?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Tavan Altı Sprinkler Boru Hattı ve Başlık Montajı",
        content: [
          "Sprinkler sistemleri, yangını başladığı noktada otomatik olarak algılayıp söndüren veya kontrol altına alan en etkili aktif koruma yöntemidir. Depo, fabrika, otel ve alışveriş merkezi gibi yüksek riskli yapılarda yönetmelikçe zorunludur.",
          "Projelendirmede yapının tehlike sınıfı, depolama yüksekliği ve yanıcı yükü dikkate alınarak spreyleme yoğunluğu, boru çapları ve pompa kapasitesi hesaplanır. Yaş, kuru ve ön tepkili sistemler gibi seçenekler tesise uygun olarak belirlenir.",
          "Boru hattı montajı, askı ve destek sistemleri, alarm vanası istasyonları ile basınç ve akış testleri 5M Factor ekiplerince tamamlanır. Test sonuçları belgelendirilerek itfaiye onayı sürecine sunulur.",
        ],
      },
      {
        slug: "yangin-pompa-ve-hidrant-sistemleri",
        title: "Yangın Pompa ve Hidrant Sistemleri",
        image:
          "https://images.unsplash.com/photo-1632576201861-28d241b46ceb?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Yangın Pompa Odası ve Hidrant Hattı Montajı",
        content: [
          "Yangın pompa istasyonu, sprinkler ve hidrant hatlarının ihtiyaç duyduğu debiyi ve basıncı sağlayan merkezdir. Elektrikli, dizel ve jokey pompalardan oluşan grup, elektrik kesintisinde bile sistemin çalışmasını garanti eder.",
          "Pompa seçimi, yangın suyu depo hacmi ve ana besleme hattı hesaplarını yapıyor; yer üstü ve yer altı hidrantları, yangın dolapları ve itfaiye su alma ağızlarını yönetmeliklere uygun yerleşimle uyguluyoruz.",
          "Kurulum sonrası pompa performans eğrisi doğrulanır, tüm hidrantlarda debi ve basınç ölçümü yapılır. Düzenli haftalık ve aylık test prosedürleri de müşterilerimize raporlanır.",
        ],
      },
      {
        slug: "yangin-algilama-ve-gazli-sondurme",
        title: "Yangın Algılama ve Gazlı Söndürme",
        image:
          "https://images.unsplash.com/photo-1585585825759-979ec75438cc?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Yangın Algılama Paneli ve Gazlı Söndürme Tüpleri",
        content: [
          "Yangın algılama ve alarm sistemleri; duman, ısı ve alev dedektörleri ile alarm paneli aracılığıyla yangını en erken aşamada fark eder. Adreslenebilir sistemler, yangının tam konumunu göstererek müdahale süresini kısaltır.",
          "Sunucu odaları, enerji panoları, arşivler ve kontrol odaları gibi suyun zarar verebileceği alanlarda FM-200, Novec 1230 veya inert gaz esaslı gazlı söndürme sistemlerini projelendirip uyguluyoruz. Oda sızdırmazlık testi ve gaz konsantrasyon hesapları yapılır.",
          "Tüm sistem bina otomasyonu, duman tahliye ve acil aydınlatma ile entegre çalışacak şekilde kurgulanır. Devreye alma sonrası eğitim ve periyodik bakım hizmeti sunulur.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hangi binalarda sprinkler sistemi zorunludur?",
        answer:
          "Binaların Yangından Korunması Hakkında Yönetmelik'e göre yapı yüksekliği, kullanım amacı ve alanına bağlı olarak otel, hastane, alışveriş merkezi, yüksek katlı yapılar ve belirli büyüklükteki depo ve fabrikalarda sprinkler zorunludur. Projeniz için gereklilikleri keşifte netleştiriyoruz.",
      },
      {
        question: "Yangın sistemleri için itfaiye onayı sürecinde destek veriyor musunuz?",
        answer:
          "Evet. Proje hazırlığından itfaiye müdürlüğü onayına, uygulama sonrası test ve raporlamaya kadar tüm süreçte teknik destek sağlıyoruz.",
      },
      {
        question: "Yangın söndürme sistemlerinin bakımı ne sıklıkla yapılmalıdır?",
        answer:
          "Pompa, vana ve dedektör testleri haftalık, aylık ve yıllık periyotlarda yapılmalıdır. Gazlı söndürme tüpleri ve söndürücüler yıllık kontrol ve gerektiğinde dolum gerektirir. Bakım sözleşmesiyle tüm bu prosedürleri sizin adınıza yürütüyoruz.",
      },
    ],
  },
  {
    slug: "sihhi-tesisat",
    title: "Sıhhi Tesisat Uygulamaları",
    image:
      "https://images.unsplash.com/photo-1646009445351-b8192e095f3a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Sıhhi Tesisat Temiz ve Pis Su Boru Hattı Montajı",
    description: [
      "Sıhhi tesisat; kullanma suyu, sıcak su, pis su ve yağmur suyu sistemlerinin güvenli, hijyenik ve ekonomik biçimde çalışmasını sağlayan temel mühendislik hizmetidir. 5M Factor Mühendislik, konut, ticari bina ve endüstriyel tesislerde sıhhi tesisat projelerini TS EN standartlarına uygun olarak tasarlar ve uygular.",
      "Temiz su şebekesi, hidrofor ve pompa grupları, sıcak su hazırlama ve sirkülasyon sistemleri, pis su ve yağmur suyu drenajı gibi tüm bileşenleri bütüncül bir yaklaşımla ele alıyoruz. PPR, çelik, paslanmaz ve PE boru sistemlerinde malzeme seçimini kullanım amacına ve su kalitesine göre yapıyoruz.",
      "Uygulamada sızdırmazlık ve basınç testleri, izolasyon ve dezenfeksiyon prosedürleri eksiksiz yürütülür. Endüstriyel tesislerde proses suyu, soğutma suyu ve atık su hatlarını da kapsayan çözümler üretiyoruz.",
      "Yenileme ve tadilat projelerinde mevcut tesisatı analiz ederek en az kesinti ve en uygun maliyetle modernizasyon sağlıyoruz.",
    ],
    subServices: [
      {
        slug: "temiz-su-ve-sicak-su-tesisati",
        title: "Temiz Su ve Sıcak Su Tesisatı",
        image:
          "https://images.unsplash.com/photo-1778514825784-0659eaf8e7a2?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Temiz Su ve Sıcak Su Dağıtım Boru Hattı Montajı",
        content: [
          "Temiz su ve sıcak su tesisatı; şebeke girişinden armatür noktalarına kadar suyun güvenli, yeterli basınçta ve hijyenik şekilde dağıtılmasını sağlar. Hatalı boyutlandırma basınç dalgalanmalarına, gürültüye ve legionella riskine yol açabilir.",
          "5M Factor Mühendislik, yük birimi hesaplarına göre boru çaplarını belirler; hidrofor, boyler ve sirkülasyon pompası gruplarını projelendirir. Yalıtımlı sıcak su hatları ve sirkülasyon sistemiyle beklemeden sıcak su ve enerji tasarrufu sağlanır.",
          "Montaj sonrası basınç testi, yıkama ve gerekli durumlarda dezenfeksiyon yapılır. Güneş enerjili ve ısı pompalı sıcak su sistemleri ile yenilenebilir enerji entegrasyonu da sunuyoruz.",
        ],
      },
      {
        slug: "pis-su-ve-yagmur-suyu-drenaj",
        title: "Pis Su ve Yağmur Suyu Drenaj Sistemleri",
        image:
          "https://images.unsplash.com/photo-1768321916212-17ae334a3d63?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Pis Su ve Yağmur Suyu Drenaj Boru Hattı",
        content: [
          "Pis su ve yağmur suyu drenaj sistemleri; atık suların binadan uzaklaştırılmasını, koku ve geri tepme riskinin önlenmesini sağlar. Doğru eğim, havalandırma kolonları ve temizleme bacaları sistemin tıkanmadan çalışması için kritiktir.",
          "Düşey ve yatay kolon hesaplarını yaparak PVC, PP veya dökme demir boru sistemlerini uyguluyoruz. Çatı drenajında sifonik yağmur suyu sistemleri ile yüksek debili yağışlarda dahi hızlı tahliye sağlıyoruz.",
          "Bodrum katlarda foseptik ve atık su pompa istasyonları, yağ ve çamur ayırıcılar da uygulama kapsamımızdadır. Kamera ile hat kontrolü ve basınçlı temizlik hizmetleriyle mevcut sistemlerin bakımını yapıyoruz.",
        ],
      },
      {
        slug: "hidrofor-ve-pompa-istasyonlari",
        title: "Hidrofor ve Pompa İstasyonları",
        image:
          "https://images.unsplash.com/photo-1690973692388-239878450c7b?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Hidrofor ve Pompa İstasyonu Montajı",
        content: [
          "Yüksek katlı binalarda ve geniş tesislerde şebeke basıncı yetersiz kalır. Hidrofor ve pompa istasyonları, tüm kullanım noktalarında yeterli ve dengeli basıncı sağlar.",
          "Debi ve manometrik yükseklik hesaplarına göre değişken devirli (frekans konvertörlü) hidrofor grupları seçiyor; depo, şamandıra ve seviye kontrol sistemleriyle birlikte uyguluyoruz. Yedekli pompa konfigürasyonları ile kesintisiz su beslemesini garanti ediyoruz.",
          "Mevcut sabit devirli sistemlerin değişken devirli sistemlere dönüştürülmesiyle elektrik tüketimini önemli ölçüde düşürüyoruz. Uzaktan izleme ve arıza bildirimi opsiyonları sunuyoruz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Sıhhi tesisat projesi için hangi bilgilere ihtiyacınız var?",
        answer:
          "Mimari proje, kat planları, kullanım amacı ve armatür sayısı projelendirme için yeterlidir. Mevcut bir tesisat yenilenecekse saha keşfi yaparak ek bilgileri kendimiz topluyoruz.",
      },
      {
        question: "Hangi boru malzemesini tercih etmeliyim?",
        answer:
          "Konutlarda ve ticari binalarda genellikle PPR-C, endüstriyel hatlarda çelik veya paslanmaz boru, drenajda ise PVC/PP kullanılır. Su kalitesi, sıcaklık, basınç ve bütçeye göre en uygun malzemeyi öneriyoruz.",
      },
      {
        question: "Tesisat sızıntısı veya basınç sorununu yerinde tespit ediyor musunuz?",
        answer:
          "Evet. Basınç testi, termal kamera ve kamera ile hat inceleme yöntemlerini kullanarak sorunun kaynağını tespit ediyor, gerekli onarım veya yenileme planını sunuyoruz.",
      },
    ],
  },
  {
    slug: "otomasyon",
    title: "Otomasyon Sistemleri",
    image:
      "https://images.unsplash.com/photo-1780034766312-73825064806c?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Otomasyon Panosu ve PLC Sistemi",
    description: [
      "5M Factor Mühendislik, endüstriyel tesislerden ticari binalara kadar mekanik sistemlerin akıllı, güvenli ve verimli çalışmasını sağlayan otomasyon çözümleri sunar. PLC ve SCADA tabanlı proses kontrolünden bina otomasyon sistemlerine (BMS) kadar tüm süreçleri projelendirme, pano imalatı, programlama ve devreye alma aşamalarıyla tek elden yürütüyoruz.",
      "Otomasyon yatırımının amacı yalnızca kontrol değil; enerji tasarrufu, kesintisiz üretim ve izlenebilirliktir. Bu nedenle HVAC, kazan dairesi, pompa istasyonu, basınçlı hava ve yangın sistemlerini ortak bir izleme altyapısında topluyor, anlık veri ve alarm yönetimi sağlıyoruz.",
      "Pano tasarımı ve imalatında IEC standartlarına, saha enstrümantasyonunda ise sensör, vana ve frekans konvertörü seçimlerinde üretici şartnamelerine uyuyoruz. Devreye alma sürecinde fonksiyonel testler ve operatör eğitimi ile sistemin sorunsuz teslimini sağlıyoruz.",
      "Mevcut sistemlerin modernizasyonu ve uzaktan erişim entegrasyonu projelerinde, üretimi durdurmadan aşamalı geçiş planları uyguluyoruz.",
    ],
    subServices: [
      {
        slug: "plc-ve-scada-sistemleri",
        title: "PLC ve SCADA Sistemleri",
        image:
          "https://images.unsplash.com/photo-1685720543547-cc4873188c75?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "PLC Kontrol Panosu ve SCADA İzleme Ekranı",
        content: [
          "PLC (Programlanabilir Mantık Denetleyici) sistemleri, makine ve proses kontrolünün güvenilir omurgasıdır. SCADA yazılımı ise tüm sahadaki verileri tek ekranda toplayarak operatöre anlık izleme ve müdahale imkânı verir.",
          "5M Factor Mühendislik, proses akış şemasından yola çıkarak kontrol felsefesini oluşturur; PLC programlama, HMI ekran tasarımı ve SCADA arayüzünü projeye özel geliştirir. Alarm yönetimi, trend kayıtları ve raporlama özellikleriyle karar almayı kolaylaştırır.",
          "Siemens, Schneider, Allen-Bradley gibi yaygın platformlarda çalışıyor, mevcut sistemlere entegrasyon ve yedekleme çözümleri sunuyoruz. Endüstri 4.0 uyumlu veri toplama ve uzaktan erişim opsiyonları da kapsamımızdadır.",
        ],
      },
      {
        slug: "bina-otomasyon-sistemleri",
        title: "Bina Otomasyon Sistemleri (BMS)",
        image:
          "https://images.unsplash.com/photo-1655204903983-73007f15cb3e?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Bina Otomasyon Sistemi Kontrol Paneli",
        content: [
          "Bina otomasyon sistemleri (BMS), iklimlendirme, aydınlatma, enerji ölçümü ve güvenlik gibi tüm bina hizmetlerini merkezi bir yazılımdan izlemeyi ve kontrol etmeyi sağlar. Doğru kurgulandığında enerji giderlerinde belirgin tasarruf elde edilir.",
          "Klima santrali, chiller, kazan ve pompa gruplarını zaman programı, doluluk ve dış hava koşullarına göre otomatik yönetiyoruz. BACnet, Modbus ve KNX gibi açık protokollerle farklı üreticilerin cihazlarını tek sistemde birleştiriyoruz.",
          "Sistem; arıza uyarıları, enerji tüketim raporları ve uzaktan erişim sayesinde tesis yönetimini kolaylaştırır. Hastane, otel, plaza ve fabrika binalarında referans uygulamalarımız bulunmaktadır.",
        ],
      },
      {
        slug: "pano-imalati-ve-enstrumantasyon",
        title: "Pano İmalatı ve Enstrümantasyon",
        image:
          "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Otomasyon Panosu İmalatı ve Saha Enstrümantasyonu",
        content: [
          "Otomasyon sisteminin güvenilirliği, pano kalitesi ve saha enstrümanlarının doğruluğuna bağlıdır. Hatalı kablolama veya yetersiz ısı yönetimi, plansız duruşların en yaygın nedenlerindendir.",
          "Atölyemizde güç ve kumanda panolarını elektrik şemalarına uygun olarak imal ediyor; etiketleme, ısı hesabı ve topraklama kurallarına dikkat ediyoruz. Fabrika kabul testi (FAT) sonrasında panolar sahaya sevk edilir.",
          "Sıcaklık, basınç, debi ve seviye transmitterleri, kontrol vanaları ve frekans konvertörlerinin seçimi, montajı ve kalibrasyonu da hizmetimiz kapsamındadır. Tüm ölçümler dokümante edilerek teslim edilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mevcut makinelerime otomasyon entegre edilebilir mi?",
        answer:
          "Evet. Çoğu mevcut sistem, sensör ve kontrolör eklenmesi ya da eski PLC'lerin modernizasyonuyla otomasyona entegre edilebilir. Saha keşfinde uygunluğu ve maliyeti belirliyoruz.",
      },
      {
        question: "Otomasyon sistemi ne kadar enerji tasarrufu sağlar?",
        answer:
          "Tasarruf oranı tesisin yapısına bağlıdır. Bina otomasyonu ve değişken devirli sürücülerle iklimlendirme ve pompa sistemlerinde genellikle belirgin bir elektrik ve yakıt tasarrufu elde edilir. Projeye özel tahmini tasarruf analizini teklif aşamasında paylaşıyoruz.",
      },
      {
        question: "Devreye alma sonrası destek veriyor musunuz?",
        answer:
          "Evet. Operatör eğitimi, yazılım yedekleme, uzaktan destek ve periyodik bakım sözleşmeleri sunuyoruz. Arıza durumunda hızlı müdahale ekibimiz yönlendirilir.",
      },
    ],
  },
  {
    slug: "dogal-gaz",
    title: "Doğal Gaz Sistemleri",
    image:
      "https://images.unsplash.com/photo-1773186704394-919b2aa3179a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Doğal Gaz Tesisatı ve Boru Hattı",
    description: [
      "5M Factor Mühendislik, konut, ticari ve endüstriyel tesisler için doğal gaz iç tesisat projelerini projelendirmeden devreye almaya kadar yürütür. Projelerimiz, EPDK mevzuatı ve ilgili gaz dağıtım şirketinin teknik şartnamelerine tam uyumlu hazırlanır; uygulamalar yetkin ve sertifikalı ekiplerce gerçekleştirilir.",
      "Kaynaklı çelik ve PE boru hatlarının döşenmesi, kolon ve sayaç bağlantıları, basınç düşürme ve ölçüm istasyonları (RMS) ile kazan ve yakma sistemleri bağlantılarını güvenlik önceliğiyle uyguluyoruz. Her hat devreye alınmadan önce dayanım ve sızdırmazlık testlerinden geçirilir.",
      "Endüstriyel tesislerde yüksek kapasiteli besleme hatları, brülör ve fırın bağlantıları, gaz algılama ve emniyet kapatma sistemleri üretim sürekliliğini koruyacak şekilde projelendirilir.",
      "Proje onayı, gaz açma ve işletmeye alma süreçlerinde dağıtım şirketi ile koordinasyonu biz yürütüyor, periyodik kaçak testi ve bakım hizmetleriyle sistemlerin güvenliğini sürdürüyoruz.",
    ],
    subServices: [
      {
        slug: "dogal-gaz-ic-tesisat-projelendirme",
        title: "Doğal Gaz İç Tesisat Projelendirme",
        image:
          "https://images.unsplash.com/photo-1782281851517-901af84b6e3e?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Doğal Gaz İç Tesisat Projesi ve Teknik Çizim",
        content: [
          "Doğal gaz iç tesisat projesi, gazın bina girişinden cihaz bağlantılarına kadar güvenli dağıtımını tanımlayan ve dağıtım şirketi tarafından onaylanması zorunlu teknik dosyadır. Hatalı veya eksik proje, gaz açılmasını geciktirir.",
          "5M Factor Mühendislik; cihaz kapasitelerine göre boru çaplarını, sayaç ve regülatör yerleşimini, havalandırma ve baca gereksinimlerini hesaplayarak projeyi hazırlar. Çizimler ve hesap raporları ilgili kurumun şartlarına uygun olarak sunulur.",
          "Proje onay sürecini takip ediyor, gerekli revizyonları hızla tamamlıyor ve onaylı projeye uygun uygulamaya geçiyoruz. Konut siteleri, iş merkezleri ve fabrikalar için deneyimli kadromuzla hizmet veriyoruz.",
        ],
      },
      {
        slug: "endustriyel-dogal-gaz-hatlari-ve-rms",
        title: "Endüstriyel Doğal Gaz Hatları ve RMS İstasyonları",
        image:
          "https://images.unsplash.com/photo-1539186607619-df476afe6ff1?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Endüstriyel Doğal Gaz Hattı ve RMS Basınç Düşürme İstasyonu",
        content: [
          "Yüksek tüketimli fabrikalarda gaz, orta veya yüksek basınçtan alınarak RMS (Basınç Düşürme ve Ölçüm) istasyonlarında kullanım basıncına indirilir. İstasyonun doğru boyutlandırılması ve emniyet donanımı güvenlik ve süreklilik açısından kritiktir.",
          "Filtre, regülatör, emniyet kapatma ve emniyet tahliye vanaları, sayaç ve ölçüm ekipmanlarından oluşan RMS istasyonlarının montajını yönetmeliklere uygun yapıyoruz. Kaynakların tahribatsız muayenesi (NDT) ve basınç testleri belgelendirilir.",
          "Kazan, brülör, fırın ve kurutucu gibi yakma sistemlerine besleme hatları, Ex korumalı ekipmanlar ve gaz algılama sistemleriyle birlikte uygulanır. Hat güzergâhı üretimi aksatmayacak biçimde planlanır.",
        ],
      },
      {
        slug: "dogal-gaz-kacak-testi-ve-bakim",
        title: "Doğal Gaz Kaçak Testi ve Periyodik Bakım",
        image:
          "https://images.unsplash.com/photo-1694674818352-f6061a0561a1?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Doğal Gaz Hattında Kaçak Testi ve Basınç Ölçümü",
        content: [
          "Doğal gaz tesisatlarında kaçak, en ciddi güvenlik risklerinden biridir. Yönetmelikler, iç tesisatların düzenli aralıklarla kontrol edilmesini zorunlu kılar.",
          "Hassas kaçak dedektörleri ve basınç düşüm testleriyle hattın tamamını inceliyor, tespit edilen kusurları giderip raporluyoruz. Regülatör, sayaç, vana ve cihaz bağlantılarının fonksiyon kontrolü periyodik bakımın parçasıdır.",
          "Bakım sözleşmeleriyle yıllık kontrolleri planlı yürütüyor; kazan dairesi ve endüstriyel yakma sistemlerinde yanma verimi ölçümüyle yakıt tasarrufuna da katkı sağlıyoruz. Acil durumlarda hızlı müdahale desteği sunuyoruz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Doğal gaz proje onayı ne kadar sürer?",
        answer:
          "Süre, ilgili dağıtım şirketinin iş yoğunluğuna ve projenin eksiksizliğine göre değişir. Doğru hazırlanmış projelerde onay genellikle kısa sürede çıkar. Süreci başından sonuna biz takip ediyoruz.",
      },
      {
        question: "Doğal gaz tesisatı ne sıklıkla kontrol edilmelidir?",
        answer:
          "Yönetmelik gereği iç tesisatın periyodik olarak kontrol edilmesi gerekir. Endüstriyel tesislerde yıllık kaçak testi ve emniyet donanımı kontrolü önerilir. Kazan ve brülör bakımı ise yılda en az bir kez yapılmalıdır.",
      },
      {
        question: "Fabrikam için RMS istasyonu şart mı?",
        answer:
          "Gaz, orta veya yüksek basınçtan teslim ediliyorsa kullanım basıncına indirmek için RMS gereklidir. Tüketim miktarınıza ve teslim basıncına göre ihtiyacı keşifte belirliyoruz.",
      },
    ],
  },
  {
    slug: "basincli-hava",
    title: "Basınçlı Hava Tesisatları",
    image:
      "https://images.unsplash.com/photo-1737874132953-b39a4812875d?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Basınçlı Hava Kompresör ve Boru Hattı",
    description: [
      "Basınçlı hava, birçok üretim tesisinde elektrikten sonra en çok kullanılan enerji türüdür ve çoğu zaman en verimsiz kullanılanıdır. 5M Factor Mühendislik, kompresör odası tasarımından dağıtım hatlarına kadar basınçlı hava sistemlerini enerji verimliliği odaklı projelendirir ve uygular.",
      "Vidalı ve pistonlu kompresörler, hava tankları, kurutucular, filtreler ve kondens yönetimi ekipmanlarını tesisin hava kalitesi ve debi ihtiyacına göre seçiyoruz. Alüminyum, paslanmaz ve çelik boru sistemleriyle düşük basınç kayıplı, sızdırmaz bir dağıtım ağı kuruyoruz.",
      "Gıda, ilaç ve elektronik gibi sektörlerde ISO 8573-1 hava kalitesi sınıflarına uygun yağsız ve kuru hava çözümleri sunuyoruz. Kompresör ısı geri kazanımı ile ısınma veya proses suyu için ek enerji tasarrufu sağlıyoruz.",
      "Kaçak tespiti, basınç optimizasyonu ve periyodik bakım hizmetleriyle kompresör maliyetlerinizi düşürüyoruz.",
    ],
    subServices: [
      {
        slug: "kompresor-odasi-tasarim-ve-montaj",
        title: "Kompresör Odası Tasarım ve Montajı",
        image:
          "https://images.unsplash.com/photo-1637296001304-4a098990b084?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Endüstriyel Kompresör Odası ve Hava Tankı Montajı",
        content: [
          "Kompresör odası; ekipmanların verimli, güvenli ve bakım yapılabilir şekilde yerleştirildiği alandır. Yetersiz havalandırma ve sıcaklık, kompresör verimini düşürür ve arıza riskini artırır.",
          "Talep profilini analiz ederek sabit ve değişken devirli kompresörlerin doğru kombinasyonunu seçiyoruz. Ana kontrolör ile çoklu kompresör yönetimi basınç bandını daraltır ve enerji tüketimini azaltır.",
          "Oda havalandırması, kondens drenajı, tank ve kurutucu yerleşimi, titreşim izolasyonu ve elektrik altyapısı projeye dahildir. Isı geri kazanım ünitesi ile kompresör atık ısısı değerlendirilebilir.",
        ],
      },
      {
        slug: "basincli-hava-boru-hatti-ve-dagitim",
        title: "Basınçlı Hava Boru Hattı ve Dağıtım",
        image:
          "https://images.unsplash.com/photo-1694674818352-f6061a0561a1?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Alüminyum Basınçlı Hava Dağıtım Boru Hattı",
        content: [
          "Dağıtım hattındaki basınç kaybı ve kaçaklar, basınçlı hava maliyetinin önemli bir kısmını oluşturur. Doğru çaplandırılmış halka hat, tüm noktalarda dengeli basınç sağlar.",
          "Alüminyum, paslanmaz çelik ve kompozit boru sistemleri ile korozyonsuz, düşük sürtünmeli ve hızlı montajlı hatlar kuruyoruz. Su ayırıcılar, drenaj noktaları ve doğru eğim ile kondens problemini önlüyoruz.",
          "Mevcut galvaniz hatların yenilenmesi ve tesis genişlemelerinde hat revizyonu hizmeti veriyoruz. Montaj sonrası basınç ve sızdırmazlık testi yapılarak rapor sunulur.",
        ],
      },
      {
        slug: "hava-kurutma-filtrasyon-ve-kacak-tespiti",
        title: "Hava Kurutma, Filtrasyon ve Kaçak Tespiti",
        image:
          "https://images.unsplash.com/photo-1787939060968-2a385b670fa1?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Basınçlı Hava Kurutucu, Filtre ve Kaçak Tespit Cihazı",
        content: [
          "Nem, yağ ve partikül içeren basınçlı hava; pnömatik ekipmanlara, ürün kalitesine ve boya hatlarına zarar verir. Kurutucu ve filtre sınıfı, kullanım amacına göre belirlenmelidir.",
          "Soğutmalı ve adsorpsiyonlu kurutucular ile ISO 8573-1 sınıflarına uygun filtre grupları seçip montajını yapıyoruz. Gıda ve ilaç gibi hassas uygulamalarda aktif karbon ve steril filtrasyon çözümleri sunuyoruz.",
          "Ultrasonik kaçak dedektörleriyle yaptığımız tespitlerde çoğu tesiste ciddi oranda hava kaçağı bulunur. Kaçakların giderilmesi doğrudan elektrik tasarrufu sağlar. Sonuçları raporlayıp onarımı gerçekleştiriyoruz.",
        ],
      },
    ],
    faqs: [
      {
        question: "Basınçlı hava kaçakları ne kadar maliyet yaratır?",
        answer:
          "Kötü bakımlı sistemlerde üretilen havanın önemli bir kısmı kaçaklarla kaybolabilir. Bu da kompresörün gereksiz çalışması ve yüksek elektrik faturası anlamına gelir. Ultrasonik kaçak taramasıyla kaybı ölçer ve giderim planı sunarız.",
      },
      {
        question: "Hangi kompresör tipi bana uygun?",
        answer:
          "Sürekli ve yüksek debili kullanımda vidalı kompresörler, kesintili ve düşük debili kullanımda pistonlu kompresörler tercih edilir. Talep dalgalanması fazlaysa değişken devirli (VSD) model enerji tasarrufu sağlar.",
      },
      {
        question: "Yağsız basınçlı hava gerekli mi?",
        answer:
          "Gıda, ilaç, tıbbi ve elektronik üretimde hava ile ürün temas ediyorsa ISO 8573-1 yağ sınıfı gereksinimleri vardır. Yağsız kompresör veya uygun filtrasyonla bu sınıflar sağlanır. Uygulamanıza göre doğru çözümü belirleriz.",
      },
    ],
  },
  {
    slug: "kizgin-yag-su-buhar",
    title: "Kızgın Yağ, Su, Buhar Tesisatları",
    image:
      "https://images.unsplash.com/photo-1707249907742-4d4984281f3a?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Kızgın Yağ ve Buhar Kazanı Boru Hattı",
    description: [
      "5M Factor Mühendislik, proses ısıtma ihtiyacı olan tesisler için kızgın yağ, kızgın su ve buhar sistemlerini projelendirir, imal eder ve devreye alır. Tekstil, gıda, kimya, ahşap, ambalaj ve metal sektörlerinde yüksek sıcaklıkta kararlı ve güvenli ısı transferi sağlayan çözümler sunuyoruz.",
      "Sistem seçiminde proses sıcaklığı, ısıl yük ve basınç gereksinimini değerlendiriyoruz. Kızgın yağ sistemleri düşük basınçta yüksek sıcaklığa çıkabilirken, buhar hızlı ve yüksek ısı transferi gerektiren proseslerde, kızgın su ise orta sıcaklıklarda tercih edilir.",
      "Kazan, brülör, sirkülasyon pompası, genleşme tankı, eşanjör ve dağıtım hatlarının tamamını ilgili basınçlı kap yönetmelikleri ve standartlara uygun olarak uyguluyoruz. Kaynak kalitesi NDT ile doğrulanır, emniyet ekipmanları devreye alma öncesinde test edilir.",
      "Yalıtım, kondens geri kazanımı ve ısı geri kazanım uygulamalarıyla yakıt tüketiminizi düşürüyor, periyodik bakım ve muayene hizmetleriyle sistemin güvenli çalışmasını sürdürüyoruz.",
    ],
    subServices: [
      {
        slug: "kizgin-yag-sistemleri",
        title: "Kızgın Yağ Sistemleri",
        image:
          "https://images.unsplash.com/photo-1781330169385-8df0629c99b6?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kızgın Yağ Kazanı ve Sirkülasyon Pompası Montajı",
        content: [
          "Kızgın yağ (termal yağ) sistemleri, düşük basınçta 300 °C'ye varan sıcaklıklara ulaşarak presler, kurutucular, reaktörler ve laminasyon hatları gibi proseslere ısı sağlar. Yüksek basınçlı buhara göre daha güvenli ve bakımı kolaydır.",
          "Kızgın yağ kazanı, brülör, sirkülasyon pompası, genleşme ve boşaltma tankı ile akış kontrol donanımını projeye göre seçiyor ve montajını tamamlıyoruz. Yağın oksidasyonunu önleyen doğru sistem kurgusu ve filtreler yağ ömrünü uzatır.",
          "Devreye almada yavaş ısıtma programı, nem alma ve emniyet ekipmanı testleri uygulanır. Yağ analizi, filtre değişimi ve periyodik bakımla sistem verimli ve güvenli kalır.",
        ],
      },
      {
        slug: "buhar-kazani-ve-buhar-hatlari",
        title: "Buhar Kazanı ve Buhar Hatları",
        image:
          "https://images.unsplash.com/photo-1650551182991-b07558247564?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Buhar Kazanı ve Yalıtımlı Buhar Dağıtım Hattı",
        content: [
          "Buhar; gıda, tekstil, kimya ve sterilizasyon gibi birçok prosesin vazgeçilmez enerji taşıyıcısıdır. Doğru tasarlanmış buhar hattı, ısı kaybını ve kondens problemlerini en aza indirir.",
          "Alev borulu ve su borulu buhar kazanlarının kurulumu, besleme suyu tankı ve arıtma ünitesi, kollektör ve basınç düşürücü istasyonlar projeye dahil uygulanır. Buhar tuzakları, vanalar ve kondens hatları verimlilik için titizlikle yerleştirilir.",
          "Kazan dairesi için gerekli tescil, muayene ve operatör belgelendirme süreçlerinde teknik destek veriyoruz. Kondens geri kazanımı ve ekonomizer uygulamalarıyla yakıt giderini düşürüyoruz.",
        ],
      },
      {
        slug: "kizgin-su-ve-esanjor-sistemleri",
        title: "Kızgın Su ve Eşanjör Sistemleri",
        image:
          "https://images.unsplash.com/photo-1765218933298-dc55fdfb517a?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kızgın Su Eşanjörü ve Pompa Grubu",
        content: [
          "Kızgın su sistemleri, 100 °C üzeri sıcaklıklarda basınçlandırılmış su ile ısı taşır. Bölgesel ısıtma, proses ısıtma ve büyük tesislerin merkezi ısı dağıtımında yaygın tercih edilir.",
          "Plakalı ve borulu eşanjörlerin ısıl hesaplarını yaparak doğru yüzey alanıyla boyutlandırıyor; basınçlandırma ünitesi, genleşme tankı ve pompa gruplarıyla birlikte devreye alıyoruz.",
          "Atık ısı geri kazanımı ile baca gazı veya proses atık ısısını kızgın suya aktararak enerji maliyetlerini azaltıyoruz. Otomasyon entegrasyonu ile sıcaklık ve debi hassas biçimde kontrol edilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Kızgın yağ mı, buhar mı tercih etmeliyim?",
        answer:
          "Yüksek sıcaklık ancak düşük basınç gereken, buhar işletmesi zahmetli proseslerde kızgın yağ avantajlıdır. Hızlı ısı transferi ve doğrudan temas gereken proseslerde buhar uygundur. Prosesinize göre karşılaştırmalı öneri sunuyoruz.",
      },
      {
        question: "Buhar ve kızgın yağ kazanları için hangi belgeler gerekir?",
        answer:
          "Basınçlı kaplar için ilgili yönetmelik gereği periyodik muayene, işletme sorumlusu belgesi ve emniyet donanımı kontrolleri gerekir. Bu süreçlerde teknik dosya hazırlığına destek oluyoruz.",
      },
      {
        question: "Mevcut kazan sistemimde verimlilik artışı sağlanabilir mi?",
        answer:
          "Evet. Yalıtım iyileştirme, ekonomizer, kondens geri kazanımı ve brülör ayarıyla yakıt tüketimi belirgin şekilde düşürülebilir. Yerinde ölçüm ve analiz sonrası iyileştirme planı sunuyoruz.",
      },
    ],
  },
  {
    slug: "altyapi",
    title: "Altyapı Tesisatları",
    image:
      "https://images.unsplash.com/photo-1565364507085-325347bae748?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Sanayi Tesisi Altyapı Kazı ve Boru Döşeme Çalışması",
    description: [
      "5M Factor Mühendislik, sanayi siteleri, organize sanayi bölgeleri ve yeni yatırımlar için içme suyu, kanalizasyon, yağmur suyu, doğal gaz ve enerji altyapılarını projelendirir ve anahtar teslim uygular. Üretim tesislerinizin sağlam temelini oluşturan altyapı işlerini planlı ve zamanında tamamlarız.",
      "Kazı, boru yatağı hazırlığı, boru döşeme, rogar ve vana odası yapımı, geri dolgu ve yüzey iyileştirme işlerini ilgili idare şartnamelerine uygun yürütüyoruz. PE, PVC, ÇHD ve GRP gibi boru malzemelerinde zemin koşuluna ve işletme basıncına uygun seçim yapıyoruz.",
      "Arıtma ve yangın suyu depoları, pompa istasyonları ve saha drenajı gibi tesis içi altyapı çözümleri, mevcut yapılarla koordine biçimde uygulanır. Üretimin devam ettiği alanlarda iş güvenliği ve trafik planlaması öncelikli tutulur.",
      "Tüm imalatlar basınç ve sızdırmazlık testlerinden geçirilir, uygulama sonrası as-built projeler teslim edilir.",
    ],
    subServices: [
      {
        slug: "icme-suyu-ve-yangin-suyu-sebekesi",
        title: "İçme Suyu ve Yangın Suyu Şebekesi",
        image:
          "https://images.unsplash.com/photo-1693907986952-3cd372e4c9d8?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Yer Altı İçme Suyu ve Yangın Suyu Boru Şebekesi Döşemesi",
        content: [
          "Tesis içi içme ve yangın suyu şebekesi; ana besleme, hidrant ve bina bağlantılarının güvenli şekilde dağıtılmasını sağlar. Hatalı döşeme, ileride sızıntı ve basınç kayıplarına neden olur.",
          "PE100 ve ÇHD borularla yapılan şebekelerde kazı, kum yatağı, kaynak/bağlantı ve basınç testleri standartlara uygun yürütülür. Vana odaları, yer altı hidrantları ve su sayaçları projede belirtilen konumlarda yapılır.",
          "Yangın suyu depoları ve pompa odalarıyla entegre çalışan şebeke, itfaiye gereksinimlerini sağlayacak debi ve basınçta teslim edilir.",
        ],
      },
      {
        slug: "kanalizasyon-ve-yagmur-suyu-altyapisi",
        title: "Kanalizasyon ve Yağmur Suyu Altyapısı",
        image:
          "https://images.unsplash.com/photo-1752584157693-ca0e952cba00?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Kanalizasyon Rogarı ve Yağmur Suyu Hattı İnşaatı",
        content: [
          "Kanalizasyon ve yağmur suyu hatları, tesisin atık sularını ve yağış sularını güvenle uzaklaştırır. Doğru eğim, rogar aralığı ve boru dayanımı sistemin uzun ömürlü olmasını belirler.",
          "Korugedli PVC, PP ve GRP borularla gravite hatları ile pompajlı hatları uyguluyoruz. Prefabrik veya yerinde dökme rogarlar, izgaralı kanallar ve ızgara yağmur suyu girişleri yapılır.",
          "Endüstriyel atık sular için yağ-çamur tutucular ve ön arıtma ünitelerine bağlantı yapılır. Tamamlanan hatlar kamera ile kontrol edilerek teslim edilir.",
        ],
      },
      {
        slug: "dogal-gaz-ve-enerji-hatti-altyapisi",
        title: "Doğal Gaz ve Enerji Hattı Altyapısı",
        image:
          "https://images.unsplash.com/photo-1565364507085-325347bae748?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Doğal Gaz PE Hattı ve Enerji Kablo Kanalı Döşemesi",
        content: [
          "Yeni sanayi tesislerinde doğal gaz, elektrik ve haberleşme altyapısı ana yapı inşa edilmeden önce planlanmalıdır. Erken koordinasyon maliyeti ve süreyi azaltır.",
          "PE doğal gaz hatlarının kazısı, döşenmesi ve test edilmesi ile enerji kablo kanalları, buat ve kablo koruma borularının yapımını gerçekleştiriyoruz. Farklı hatların mesafe ve kesişme kurallarına uyulur.",
          "Altyapı güzergâhı, diğer hatlar ve zemin koşullarına göre planlanır; as-built projeler ve test raporlarıyla birlikte teslim edilir.",
        ],
      },
    ],
    faqs: [
      {
        question: "Altyapı işleri ne kadar sürer?",
        answer:
          "Süre; hat uzunluğu, zemin koşulları ve izin süreçlerine bağlıdır. Keşif sonrası iş programını haftalık detayda paylaşıyoruz.",
      },
      {
        question: "Üretim devam ederken altyapı çalışması yapılabilir mi?",
        answer:
          "Evet. Aşamalı çalışma planı, güvenli çalışma alanları ve trafik düzenlemesiyle üretimi aksatmadan uygulama yapıyoruz.",
      },
      {
        question: "Uygulama sonrası as-built proje teslim ediyor musunuz?",
        answer:
          "Evet. Tüm altyapı işlerinde uygulama sonrası as-built çizimler, test raporları ve malzeme belgeleri teslim edilir.",
      },
    ],
  },
  {
    slug: "endustriyel-proses",
    title: "Endüstriyel Proses Tesisatları",
    image:
      "https://images.unsplash.com/photo-1670689334896-8fa8291daa27?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Ankara Endüstriyel Proses Tesisi Boru ve Ekipman Montajı",
    description: [
      "5M Factor Mühendislik, üretim tesislerinin proses hatlarını tasarımdan devreye almaya kadar anahtar teslim olarak yürütür. Proses boru hatları, tank ve ekipman montajı, çelik konstrüksiyon ve yardımcı tesis sistemlerini koordineli biçimde sunarak müşterilerimize tek muhatap kolaylığı sağlıyoruz.",
      "Gıda, kimya, otomotiv, enerji ve ambalaj gibi sektörlerde proses akış şemalarını (P&ID) inceliyor, uygulama projelerini hazırlıyor ve sahada hayata geçiriyoruz. Paslanmaz çelik, karbon çelik ve plastik boru hatlarında sertifikalı kaynakçılar ve tahribatsız muayene ile kalite güvence altına alınır.",
      "Yeni kurulum yanında kapasite artırımı, hat taşıma ve modernizasyon projelerinde üretimi minimum etkileyen planlama yapıyoruz. Duruş dönemlerinde yoğun ekip ve ekipman desteğiyle işleri kısa sürede tamamlıyoruz.",
      "Devreye alma, performans testi ve operatör eğitimiyle prosesin hedeflenen kapasiteye hızlıca ulaşmasını sağlıyoruz.",
    ],
    subServices: [
      {
        slug: "proses-boru-hatlari-ve-kaynak",
        title: "Proses Boru Hatları ve Kaynak İmalatı",
        image:
          "https://images.unsplash.com/photo-1539186607619-df476afe6ff1?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Paslanmaz Proses Boru Hattı Kaynak İmalatı",
        content: [
          "Proses boru hatları; ham madde, ürün, kimyasal ve yardımcı akışkanların güvenle taşınmasını sağlar. Hijyen, korozyon direnci ve basınç dayanımı, malzeme ve kaynak kalitesiyle doğrudan ilişkilidir.",
          "Paslanmaz çelik (TIG, orbital), karbon çelik ve alaşımlı boru imalatını WPS/PQR prosedürlerine uygun yapıyoruz. Gıda ve ilaç hatlarında sanitary bağlantılar, pasivasyon ve temizlik işlemleri uygulanır.",
          "Kaynak dikişleri radyografik veya penetrant muayene ile kontrol edilir, hidrostatik testler yapılır ve izlenebilirlik dokümanlarıyla teslim edilir.",
        ],
      },
      {
        slug: "tank-ve-proses-ekipmani-montaji",
        title: "Tank ve Proses Ekipmanı Montajı",
        image:
          "https://images.unsplash.com/photo-1705147219565-fe9f6f369d03?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Endüstriyel Tank ve Proses Ekipmanı Montajı",
        content: [
          "Tank, reaktör, eşanjör, pompa ve karıştırıcı gibi proses ekipmanlarının doğru yerleştirilmesi ve bağlantısı, verimli üretimin temelidir.",
          "Ekipmanların nakli, kaldırma ve hizalanması planlı vinç ve rigging operasyonlarıyla gerçekleştirilir. Temel bağlantıları, nozul hizalaması ve boru bağlantıları üretici talimatlarına göre tamamlanır.",
          "Mekanik tamamlama sonrası sızdırmazlık ve fonksiyon testleri yapılır, devreye alma ve performans doğrulaması müşteriyle birlikte yürütülür.",
        ],
      },
      {
        slug: "celik-konstruksiyon-ve-platform-imalati",
        title: "Çelik Konstrüksiyon ve Platform İmalatı",
        image:
          "https://images.unsplash.com/photo-1764397301085-516f4d5bfdc5?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Proses Tesisi Çelik Konstrüksiyon ve Platform İmalatı",
        content: [
          "Proses tesislerinde ekipman şasileri, boru köprüleri, platform ve merdivenler çelik konstrüksiyonla oluşturulur. Statik hesap ve iş güvenliği bu imalatlarda temel şarttır.",
          "Atölyemizde statik projeye uygun imalat yapıyor, kumlama ve boya veya sıcak daldırma galvaniz ile korozyon koruması sağlıyoruz. Sahada bulonlu veya kaynaklı montajla hızlı kurulum gerçekleştiriyoruz.",
          "Korkuluk, basamak ve çalışma platformları iş güvenliği mevzuatına uygun olarak tasarlanır. Mevcut tesislerde ek platform ve takviye çalışmaları da yapılır.",
        ],
      },
    ],
    faqs: [
      {
        question: "Proje için P&ID veya teknik şartname sağlamam gerekiyor mu?",
        answer:
          "Varsa P&ID ve şartnameyi inceleyerek başlıyoruz. Yoksa saha verisi ve proses bilgilerinizle uygulama projelerinin hazırlanmasında destek oluyoruz.",
      },
      {
        question: "Üretim durmadan modernizasyon yapılabilir mi?",
        answer:
          "Çoğu projede evet. Önceden hazırlanan prefabrik parçalar ve kısa duruş pencerelerinde yapılan bağlantılarla üretim etkisi en aza indirilir.",
      },
      {
        question: "Kaynak ve imalat kalite belgelerini sunuyor musunuz?",
        answer:
          "Evet. WPS/PQR, kaynakçı sertifikaları, malzeme sertifikaları ve NDT raporları teslim dosyasında yer alır.",
      },
    ],
  },
];

const seoNames: Record<string, string> = {
  "endustriyel-ve-konfor-hvac": "Endüstriyel ve Konfor HVAC",
  "yangindan-korunma": "Yangından Korunma ve Söndürme Sistemleri",
  "sihhi-tesisat": "Sıhhi Tesisat",
  otomasyon: "Endüstriyel Otomasyon",
  "dogal-gaz": "Doğal Gaz Tesisatı",
  "basincli-hava": "Basınçlı Hava Sistemleri",
  "kizgin-yag-su-buhar": "Kızgın Yağ, Su ve Buhar Sistemleri",
  altyapi: "Sanayi Altyapı İşleri",
  "endustriyel-proses": "Endüstriyel Proses Tesisatı",
};

const withAnkara = (text: string) =>
  text.includes("Ankara") ? text : `Ankara ${text}`;

/**
 * Hizmet verilerine yerel SEO katmanı ekler: Ankara odaklı görsel açıklamaları,
 * Ankara'ya özel kapanış paragrafı ve "Ankara'da ... veriyor musunuz?" sorusu.
 */
export const services: Service[] = baseServices.map((service) => {
  const seoName = seoNames[service.slug] ?? service.title;
  const seoLower = lowerKeep(seoName);

  return {
    ...service,
    seoName,
    imageAlt: withAnkara(service.imageAlt),
    description: [
      ...service.description,
      `Ankara'da ${seoLower} hizmeti arıyorsanız, Sincan Başkent OSB merkezli 5M Factor Mühendislik; Ankara, Ostim ve çevresindeki konut, ticari ve endüstriyel tesisler için projelendirme, uygulama ve devreye alma süreçlerini tek elden yürütür. Ücretsiz keşif ve teklif için bizimle iletişime geçebilirsiniz.`,
    ],
    subServices: service.subServices.map((sub) => ({
      ...sub,
      imageAlt: withAnkara(sub.imageAlt),
      content: [
        ...sub.content,
        `5M Factor Mühendislik, Ankara ve Başkent OSB'de ${lowerKeep(sub.title)} ihtiyaçlarınız için keşiften devreye almaya kadar yanınızda. Projenize özel çözüm ve teklif almak için bizi arayabilir ya da iletişim formunu doldurabilirsiniz.`,
      ],
    })),
    faqs: [
      ...service.faqs,
      {
        question: `Ankara'da ${seoLower} hizmeti veriyor musunuz?`,
        answer: `Evet. Sincan Başkent OSB'deki merkezimizden Ankara, Ostim ve çevresindeki konut, ticari ve endüstriyel projelere ${seoLower} alanında projelendirme, uygulama ve devreye alma hizmeti veriyoruz. Ücretsiz keşif için bizi arayabilirsiniz.`,
      },
    ],
  };
});

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getSubService(
  serviceSlug: string,
  subServiceSlug: string
): { service: Service; subService: SubService } | undefined {
  const service = getService(serviceSlug);
  const subService = service?.subServices.find(
    (item) => item.slug === subServiceSlug
  );
  return service && subService ? { service, subService } : undefined;
}
