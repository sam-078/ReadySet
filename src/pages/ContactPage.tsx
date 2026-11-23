import { Clock, Mail, HelpCircle } from 'lucide-react';
import { Link } from '../components/Link';
import { CONTACT_CONFIG } from '../config/commerce';
import { STORE_FAQS } from '../data/products';
import { usePageSEO } from '../utils/routing';

export function ContactPage() {
  usePageSEO({
    title: 'Contact & Support — ReadySet',
    description:
      'Support email details, common answers, and response expectations for ReadySet digital toolkits.',
  });

  const quickFaqs = STORE_FAQS.slice(0, 4);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="max-w-3xl space-y-12">
        <header className="space-y-3 pb-6 border-b border-zinc-200/80">
          <p className="text-xs font-medium text-[#1D4ED8]">Support</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
            Contact ReadySet
          </h1>
          <p className="text-base text-[#52525B] leading-relaxed">
            Need help with a download link, file format, or toolkit question? Reach us by email or
            check the quick answers below.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <section className="bg-white border border-zinc-200/90 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-[#18181B]">
              <Mail className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
              <h2>Email support</h2>
            </div>
            <p className="font-mono text-sm sm:text-base font-medium text-[#1D4ED8] break-all">
              <a href={`mailto:${CONTACT_CONFIG.supportEmail}`} className="hover:underline">
                {CONTACT_CONFIG.supportEmail}
              </a>
            </p>
            {CONTACT_CONFIG.emailIsPlaceholder && (
              <p className="text-xs text-[#71717A] leading-relaxed">
                Placeholder contact address configured in commerce settings. Update with your live
                domain support inbox before going live.
              </p>
            )}
          </section>

          <section className="bg-white border border-zinc-200/90 rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-[#18181B]">
              <Clock className="w-4 h-4 text-[#1D4ED8]" aria-hidden="true" />
              <h2>Support expectations</h2>
            </div>
            <div className="text-sm text-[#52525B] space-y-1.5 leading-relaxed">
              <p>
                <span className="font-medium text-[#18181B]">Response time:</span>{' '}
                {CONTACT_CONFIG.responseWindow}
              </p>
              <p>
                <span className="font-medium text-[#18181B]">Support hours:</span>{' '}
                {CONTACT_CONFIG.supportHours}
              </p>
              <p className="text-xs text-[#71717A] pt-1">
                When emailing about an order, include your purchase email address and kit name so
                we can assist faster.
              </p>
            </div>
          </section>
        </div>

        <section aria-labelledby="contact-faq-heading" className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#1D4ED8]" aria-hidden="true" />
              <h2
                id="contact-faq-heading"
                className="font-display text-2xl font-semibold text-[#18181B]"
              >
                Common questions
              </h2>
            </div>
            <Link to="/faq" className="text-sm font-medium text-[#1D4ED8] hover:underline">
              View all FAQs
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickFaqs.map((faq) => (
              <article
                key={faq.id}
                className="bg-[#F3F1EC] border border-zinc-200/80 rounded-xl p-5 space-y-2"
              >
                <h3 className="font-display text-base font-semibold text-[#18181B]">
                  {faq.question}
                </h3>
                <p className="text-sm text-[#52525B] leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
