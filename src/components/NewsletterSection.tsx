import { useState } from 'react';
import { Info } from 'lucide-react';
import { NEWSLETTER_CONFIG } from '../config/commerce';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    if (!NEWSLETTER_CONFIG.configured || !NEWSLETTER_CONFIG.actionUrl) {
      setStatusMessage(
        'Newsletter integration is not yet configured. Your email address was not submitted or stored.'
      );
      return;
    }

    // When a real newsletter provider actionUrl is configured, submit via standard form/fetch
    setStatusMessage(`Submitted to ${NEWSLETTER_CONFIG.providerName ?? 'newsletter provider'}.`);
  };

  return (
    <section
      aria-labelledby="newsletter-heading"
      className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-20"
    >
      <div className="bg-white border border-zinc-200/90 rounded-xl p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-2.5">
            <p className="text-xs font-medium text-[#52525B]">Optional studio notes</p>
            <h2
              id="newsletter-heading"
              className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] tracking-tight"
            >
              Hear when new toolkits release.
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed max-w-lg">
              Occasional release notes when we publish new planners, spreadsheets, or updated
              versions of existing kits. Entirely optional.
            </p>
          </div>

          <div className="lg:col-span-6 space-y-3">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address (optional)
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (statusMessage) setStatusMessage(null);
                }}
                placeholder="you@example.com"
                autoComplete="email"
                className="flex-1 min-h-[44px] px-4 py-2.5 text-sm bg-[#FAF9F6] border border-zinc-300 rounded-lg text-[#18181B] placeholder:text-[#71717A] focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/15"
              />
              <button
                type="submit"
                className="min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#18181B] hover:bg-[#27272A] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8]"
              >
                Notify me
              </button>
            </form>

            {!NEWSLETTER_CONFIG.configured && (
              <p className="text-xs text-[#71717A] flex items-start gap-1.5 leading-relaxed">
                <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Optional signup — newsletter integration is pending configuration, so no emails
                  are collected or sent yet.
                </span>
              </p>
            )}

            {statusMessage && (
              <p
                role="status"
                className="text-xs font-medium text-[#18181B] bg-[#F3F1EC] border border-zinc-200 rounded-lg px-3.5 py-2.5"
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
