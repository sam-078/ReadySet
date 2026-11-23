import { FaqAccordion } from '../components/FaqAccordion';
import { Link } from '../components/Link';
import { STORE_FAQS } from '../data/products';
import { usePageSEO } from '../utils/routing';

export function FaqPage() {
  usePageSEO({
    title: 'Frequently Asked Questions — ReadySet',
    description:
      'Answers on digital downloads, file formats, editing ReadySet templates, software requirements, and refunds.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: STORE_FAQS.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="max-w-3xl space-y-10">
        <header className="space-y-3 pb-6 border-b border-zinc-200/80">
          <p className="text-xs font-medium text-[#1D4ED8]">Support &amp; answers</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
            Frequently asked questions
          </h1>
          <p className="text-base text-[#52525B] leading-relaxed">
            Everything you need to know about ReadySet digital toolkits, file formats, licensing,
            and download delivery.
          </p>
        </header>

        <FaqAccordion items={STORE_FAQS} />

        <div className="bg-[#F3F1EC] border border-zinc-200/80 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="font-display text-lg font-semibold text-[#18181B]">
              Still have a question?
            </h2>
            <p className="text-sm text-[#52525B]">
              Check our support email details and response expectations on the contact page.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#18181B] hover:bg-[#27272A] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Contact support
          </Link>
        </div>
      </div>
    </div>
  );
}
