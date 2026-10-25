"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageCircle, Phone, X } from "lucide-react";

const PHONE_HREF = "tel:+905316760684";

type Message = {
  id: number;
  role: "user" | "bot";
  text: string;
};

const quickQuestions = [
  {
    question: "Hangi hizmetleri veriyorsunuz?",
    answer:
      "Endüstriyel ve konfor HVAC (ısıtma, havalandırma, şartlandırma), yangından korunma ve söndürme, sıhhi tesisat, otomasyon, doğal gaz, basınçlı hava, kızgın yağ/su/buhar, altyapı ve endüstriyel proses tesisatları alanlarında projelendirmeden devreye almaya kadar hizmet veriyoruz. Detaylar için Faaliyet Alanlarımız sayfasını inceleyebilirsiniz.",
  },
  {
    question: "Hizmet bölgeleriniz nereler?",
    answer:
      "Merkezimiz Sincan Başkent OSB'de. Ankara ve çevresindeki (Sincan, Ostim ve civarı) projelerde hizmet veriyoruz. Farklı şehirlerdeki projeler için de bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer:
      "Evet, Ankara ve çevresindeki projeleriniz için ücretsiz keşif ve ihtiyaç analizi hizmeti sunuyoruz. Saha ekibimiz yerinde inceleme yaparak size en uygun mühendislik çözümünü planlar.",
  },
  {
    question: "Projelendirme süreci nasıl işliyor?",
    answer:
      "Süreç dört adımda ilerler: Keşif ve Planlama, Projelendirme ve Fiyatlandırma, Uygulama ve Montaj, Teslimat ve Destek. Her aşamada sizinle şeffaf iletişim kurarız.",
  },
  {
    question: "Hangi markalarla çalışıyorsunuz?",
    answer:
      "Ekipman ve marka seçimini projenin ihtiyaçlarına, bütçesine ve sizin tercihlerinize göre yapıyoruz. Marka detayları için keşif sonrası hazırlanan teklifte size seçenekler sunuyoruz veya bizi arayabilirsiniz.",
  },
];

const initialMessages: Message[] = [
  {
    id: 0,
    role: "bot",
    text: "Merhaba! Ben 5M Asistan. Aşağıdaki sorulardan birini seçerek hızlıca bilgi alabilirsiniz.",
  },
];

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container || messages.length < 2) return;

    // Yeni soru sorulduğunda sohbeti sorunun hizasına kaydır, cevabın başı görünsün
    const lastQuestion = [...messages].reverse().find((m) => m.role === "user");
    const target = container.querySelector<HTMLElement>(
      `[data-message-id="${lastQuestion?.id}"]`
    );
    if (!target) return;

    const top =
      target.getBoundingClientRect().top -
      container.getBoundingClientRect().top +
      container.scrollTop -
      8;
    container.scrollTo({ top, behavior: "smooth" });
  }, [messages]);

  const askedQuestions = new Set(
    messages.filter((m) => m.role === "user").map((m) => m.text)
  );
  const remainingQuestions = quickQuestions.filter(
    (item) => !askedQuestions.has(item.question)
  );

  const handleQuestion = (item: (typeof quickQuestions)[number]) => {
    setMessages((prev) => [
      ...prev,
      { id: prev.length, role: "user", text: item.question },
      { id: prev.length + 1, role: "bot", text: item.answer },
    ]);
  };

  return (
    <>
      {/* Sol alt - Hızlı arama */}
      <a
        href={PHONE_HREF}
        aria-label="Hemen ara: 0531 676 06 84"
        className="fixed bottom-4 left-4 z-40 flex h-14 w-14 items-center justify-center"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-colors hover:bg-green-600">
          <Phone className="h-6 w-6" />
        </span>
      </a>

      {/* Sağ alt - Chatbot */}
      <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-3">
        {isOpen && (
          <div
            role="dialog"
            aria-label="5M Asistan"
            className="flex h-[32rem] max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-300 bg-gray-100 shadow-2xl"
          >
            <div className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500">
                  <Bot className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold">5M Asistan</p>
                  <p className="text-xs text-gray-400">Size nasıl yardımcı olabiliriz?</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Sohbeti kapat"
                className="rounded-full p-1 text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div
              ref={messagesRef}
              className="flex-1 space-y-3 overflow-y-auto p-4"
              aria-live="polite"
            >
              {messages.map((message) =>
                message.role === "user" ? (
                  <div
                    key={message.id}
                    data-message-id={message.id}
                    className="flex justify-end"
                  >
                    <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-gray-300 px-4 py-2 text-sm text-gray-900">
                      {message.text}
                    </p>
                  </div>
                ) : (
                  <div key={message.id} className="flex items-start gap-2">
                    <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-500">
                      <Bot className="h-4 w-4" />
                    </span>
                    <p className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-4 py-2 text-sm leading-6 text-gray-700 shadow-sm">
                      {message.text}
                    </p>
                  </div>
                )
              )}

              {remainingQuestions.length > 0 ? (
                <div className="flex flex-col items-end gap-2 pt-1">
                  {remainingQuestions.map((item) => (
                    <button
                      key={item.question}
                      type="button"
                      onClick={() => handleQuestion(item)}
                      className="rounded-full border border-orange-500 bg-white px-4 py-2 text-left text-sm text-orange-600 transition-colors hover:bg-orange-500 hover:text-white"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="pt-1 text-center text-xs text-gray-500">
                  Başka sorularınız için bizi{" "}
                  <a
                    href={PHONE_HREF}
                    className="font-semibold text-orange-600 hover:underline"
                  >
                    arayabilirsiniz
                  </a>
                  .
                </p>
              )}
            </div>

          </div>
        )}

        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="5M Asistan ile sohbet et"
            className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-gray-900 text-white shadow-lg transition-colors hover:bg-gray-800"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}
      </div>
    </>
  );
}
