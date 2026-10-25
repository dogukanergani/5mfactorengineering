/** Metni kelime sınırında keserek meta açıklama uzunluğuna indirir. */
export function clip(text: string, max = 158): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(" ");
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).replace(/[,.;:\s]+$/, "")}…`;
}

/** Metnin ilk cümlesini döndürür. */
export function firstSentence(text: string): string {
  const match = text.match(/^.+?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

/** Türkçe küçük harfe çevirir ama HVAC, RMS gibi tamamı büyük harfli kısaltmaları korur. */
export function lowerKeep(text: string): string {
  return text
    .split(" ")
    .map((word) => {
      const letters = word.replace(/[^\p{L}]/gu, "");
      return letters.length > 1 && letters === letters.toLocaleUpperCase("tr")
        ? word
        : word.toLocaleLowerCase("tr");
    })
    .join(" ");
}
