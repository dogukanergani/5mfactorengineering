"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { ServiceFaq as ServiceFaqItem } from "@/lib/servicesData";

export default function ServiceFaq({ faqs }: { faqs: ServiceFaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-xl border bg-card shadow-sm transition-colors ${
              isOpen ? "border-orange-500" : "border-gray-300"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-gray-900 transition-colors hover:text-orange-500"
              >
                {item.question}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-orange-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-gray-600">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
