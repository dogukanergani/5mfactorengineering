"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

const inputClassName =
  "mt-2 w-full rounded-md border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white placeholder:text-gray-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function IletisimForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Mesaj gönderilirken bir hata oluştu.");
      }

      setIsSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Mesaj gönderilirken bir hata oluştu."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-900/20 border border-green-500 text-green-400 p-6 rounded-xl text-center">
        Mesajınız başarıyla alınmıştır. Uzman mühendislik ekibimiz en kısa
        sürede sizinle iletişime geçecektir.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-xl border border-gray-700 bg-gray-800 p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Ad Soyad
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Adınız Soyadınız"
            className={inputClassName}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="ornek@sirket.com"
            className={inputClassName}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="05XX XXX XX XX"
            className={inputClassName}
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
            Konu
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Talebinizin konusu"
            className={inputClassName}
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Mesaj
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Mesajınızı buraya yazın..."
          className={`${inputClassName} resize-none`}
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      {error && (
        <p className="rounded-md border border-red-500 bg-red-900/20 px-4 py-2.5 text-sm text-red-400">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
