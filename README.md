# 5M Factor Mühendislik — Kurumsal Web Sitesi

Ankara merkezli **5M Factor Mühendislik** için **Velora İletişim** ajansı bünyesinde sıfırdan geliştirilmiş, modern web standartlarına uygun kurumsal web sitesi. Doğalgaz sistemleri, mekanik tesisat ve endüstriyel imalat alanlarında hizmet veren firmanın dijital vitrini olarak tasarlanmış; performans, arama motoru görünürlüğü ve kullanıcı deneyimi öncelikli bir mimari üzerine kurulmuştur.

## Kullanılan Teknolojiler

- **Next.js (App Router)** — Sunucu bileşenleri, statik ve dinamik segmentler ile hibrit render mimarisi
- **React 19** — Bileşen tabanlı, yeniden kullanılabilir arayüz katmanı
- **TypeScript** — Uçtan uca tip güvenliği
- **Tailwind CSS v4** — Yardımcı sınıf tabanlı, tutarlı ve sürdürülebilir tasarım sistemi
- **Nodemailer** — Özel SMTP entegrasyonu ile sunucu taraflı e-posta gönderim altyapısı
- **Lucide React** — Hafif ve tutarlı ikon seti

## Öne Çıkan Özellikler

- **Dinamik sayfa yapıları** — Faaliyet alanları ve blog içerikleri, `[slug]` tabanlı dinamik route'lar üzerinden merkezi veri kaynaklarından (`lib/`) beslenir; yeni içerik eklemek kod değişikliği gerektirmez.
- **Koyu tema (Dark Mode) UI/UX** — Sitenin tamamı, marka kimliğiyle uyumlu turuncu vurgu rengine sahip koyu bir arayüz üzerine tasarlanmıştır.
- **%100 SEO uyumluluğu**
  - `schema.org` uyumlu **JSON-LD** yapılandırılmış verisi (LocalBusiness / GeneralContractor) ile zengin arama sonuçları desteği
  - `sitemap.ts` ile derleme zamanında otomatik üretilen, tüm statik ve dinamik sayfaları kapsayan **dinamik sitemap**
  - `robots.ts` ile programatik robots yönetimi
  - Sayfa bazlı Open Graph ve Twitter Card meta verileri
  - `next/font` ile varlık birleştirme ve optimize edilmiş font yükleme stratejisi
- **Güvenli form işleme mimarisi** — İletişim formu, `app/api/contact` altında sunucu taraflı bir route handler üzerinden çalışır; kullanıcı girdileri HTML enjeksiyonuna karşı escape edilir, SMTP kimlik bilgileri yalnızca ortam değişkenleri (environment variables) üzerinden okunur ve istemci tarafında hiçbir gizli bilgi bulunmaz.
- **Bileşen tabanlı mimari** — Navbar, Footer, form ve sosyal medya bileşenleri izole ve yeniden kullanılabilir şekilde yapılandırılmıştır.

## Proje Yapısı

```
app/
  api/contact/        SMTP tabanlı iletişim formu endpoint'i
  blog/[slug]/         Dinamik blog detay sayfaları
  faaliyet-alanlarimiz/[slug]/  Dinamik hizmet/faaliyet alanı sayfaları
  kurumsal/            Kurumsal sayfa
  iletisim/            İletişim sayfası
  sitemap.ts           Dinamik sitemap üretimi
  robots.ts            Robots yapılandırması
components/            Yeniden kullanılabilir arayüz bileşenleri
lib/                   Site yapılandırması ve içerik veri kaynakları
public/                Statik varlıklar
```

## Kurulum

Depoyu klonladıktan sonra bağımlılıkları yükleyin:

```bash
npm install
```

Proje kök dizininde bir `.env.local` dosyası oluşturun ve aşağıdaki ortam değişkenlerini kendi SMTP sağlayıcınıza göre tanımlayın:

```bash
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
CONTACT_EMAIL=destination@example.com
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Uygulama varsayılan olarak [http://localhost:3000](http://localhost:3000) adresinde çalışır.

Üretim derlemesi için:

```bash
npm run build
npm start
```

## Dağıtım (Deployment)

Proje, [Vercel](https://vercel.com) üzerinde sıfır ek yapılandırma ile dağıtıma hazırdır. Yukarıdaki ortam değişkenlerinin Vercel proje ayarlarındaki **Environment Variables** bölümünde tanımlanması yeterlidir.

## Lisans

Bu proje, 5M Factor Mühendislik için özel olarak geliştirilmiştir. Tüm hakları saklıdır.
