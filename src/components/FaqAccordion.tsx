import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { ProductFAQ } from '../types/store';

interface FaqAccordionProps {
  items: { id?: string; question: string; answer: string }[] | ProductFAQ[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `faq-panel-${idx}`;
        const buttonId = `faq-button-${idx}`;

        return (
          <div key={item.question} className="py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full py-4 sm:py-5 flex items-center justify-between gap-4 text-left text-base sm:text-lg font-medium text-[#18181B] hover:text-[#1D4ED8] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] rounded-xs"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#52525B] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#1D4ED8]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-sm sm:text-base text-[#52525B] leading-relaxed"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
