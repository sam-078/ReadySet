import { Link } from '../components/Link';
import { CONTACT_CONFIG } from '../config/commerce';
import { usePageSEO } from '../utils/routing';

function PolicyLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <article className="max-w-3xl space-y-8">
        <header className="space-y-3 pb-6 border-b border-zinc-200/80">
          <p className="text-xs font-medium text-[#1D4ED8]">{eyebrow}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#18181B] tracking-tight">
            {title}
          </h1>
          <p className="text-xs text-[#71717A] font-mono">Last updated: {updated}</p>
        </header>
        <div className="space-y-6 text-sm sm:text-base text-[#52525B] leading-relaxed">
          {children}
        </div>
      </article>
    </div>
  );
}

export function PrivacyPolicyPage() {
  usePageSEO({
    title: 'Privacy Policy — ReadySet',
    description:
      'How ReadySet handles browsing, external checkout providers, and digital product delivery without user accounts.',
  });

  return (
    <PolicyLayout eyebrow="Legal" title="Privacy Policy" updated="November 2026">
      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          1. Minimal data architecture
        </h2>
        <p>
          ReadySet is designed to be browsed without creating an account, logging in, or storing a
          customer profile on this website. We do not store payment card numbers, bank details, or
          uploaded user files.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          2. External checkout &amp; digital delivery
        </h2>
        <p>
          When external checkout is enabled, purchases and download delivery are processed directly
          by our third-party checkout and digital delivery provider. Any billing details or email
          address you enter during checkout are governed by that provider&apos;s privacy policy
          and used solely to complete your order and deliver your download links.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          3. Optional newsletter updates
        </h2>
        <p>
          Newsletter signup on ReadySet is completely optional. While newsletter integration is
          pending configuration, no email addresses are collected or transmitted through the
          website.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          4. Support correspondence
        </h2>
        <p>
          If you email us at{' '}
          <a
            href={`mailto:${CONTACT_CONFIG.supportEmail}`}
            className="text-[#1D4ED8] hover:underline"
          >
            {CONTACT_CONFIG.supportEmail}
          </a>{' '}
          regarding a toolkit or download issue, we use your email only to respond to your support
          request.
        </p>
      </section>
    </PolicyLayout>
  );
}

export function TermsPage() {
  usePageSEO({
    title: 'Terms and Conditions — ReadySet',
    description:
      'Terms of use and individual licensing terms for ReadySet digital templates, planners, and toolkits.',
  });

  return (
    <PolicyLayout eyebrow="Legal" title="Terms & Conditions" updated="November 2026">
      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          1. Digital product scope
        </h2>
        <p>
          All products offered on ReadySet are downloadable digital files—such as spreadsheets,
          editable documents, planners, and checklists. No physical items are shipped.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          2. Permitted use &amp; license
        </h2>
        <p>
          Purchasing a ReadySet toolkit grants you a non-exclusive, non-transferable license for
          personal or solo freelance/business use. You may duplicate and customise templates for
          your own projects. For the College Event Organiser Kit, working spreadsheets may be
          shared internally with your immediate organising committee for that specific event.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          3. Restrictions
        </h2>
        <p>
          You may not resell, redistribute, bundle for free or paid download, or publish ReadySet
          template files publicly as standalone templates.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          4. Pricing &amp; availability
        </h2>
        <p>
          Prices are listed in Indian Rupees (INR). Products become available for purchase only
          after external checkout and digital delivery providers are configured. Please review our{' '}
          <Link to="/refund-policy" className="text-[#1D4ED8] hover:underline">
            Refund Policy
          </Link>{' '}
          prior to ordering.
        </p>
      </section>
    </PolicyLayout>
  );
}

export function RefundPolicyPage() {
  usePageSEO({
    title: 'Refund Policy — ReadySet',
    description:
      'Digital product refund policy, broken download resolution, and duplicate purchase support for ReadySet.',
  });

  return (
    <PolicyLayout eyebrow="Legal" title="Refund Policy" updated="November 2026">
      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          1. Digital download policy
        </h2>
        <p>
          Because ReadySet products are digital toolkits delivered immediately upon purchase, all
          completed downloads are generally final and non-refundable once accessed.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          2. Exceptions we make right
        </h2>
        <p>
          We will gladly review and resolve refund or replacement requests in the following cases:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Accidental duplicate purchase of the same toolkit or bundle</li>
          <li>Corrupted or unreadable files that cannot be resolved with a fresh download link</li>
          <li>Technical checkout billing errors confirmed by the payment provider</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-display text-xl font-semibold text-[#18181B]">
          3. How to request help
        </h2>
        <p>
          Email{' '}
          <a
            href={`mailto:${CONTACT_CONFIG.supportEmail}`}
            className="text-[#1D4ED8] hover:underline"
          >
            {CONTACT_CONFIG.supportEmail}
          </a>{' '}
          within 7 days of purchase with your order confirmation email and the toolkit name. Check
          our{' '}
          <Link to="/contact" className="text-[#1D4ED8] hover:underline">
            Contact page
          </Link>{' '}
          for response times.
        </p>
      </section>
    </PolicyLayout>
  );
}
