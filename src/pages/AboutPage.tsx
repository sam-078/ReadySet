import { ArrowRight } from 'lucide-react';
import { Link } from '../components/Link';
import { usePageSEO } from '../utils/routing';

export function AboutPage() {
  usePageSEO({
    title: 'About ReadySet — Digital Toolkits & Templates',
    description:
      'At ReadySet, we believe getting started shouldn’t be the hardest part. Practical digital toolkits to go from idea to action.',
  });

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="max-w-3xl space-y-10">
        <header className="space-y-4 pb-8 border-b border-zinc-200/80">
          <p className="text-xs font-medium text-[#1D4ED8]">About ReadySet</p>
          <h1
            className="font-display text-3xl sm:text-5xl font-bold text-[#18181B] tracking-tight leading-[1.08]"
            style={{ textWrap: 'balance' }}
          >
            Everything you need. Nothing you need to figure out.
          </h1>
        </header>

        <div className="space-y-6 text-lg sm:text-xl text-[#18181B] leading-relaxed font-normal">
          <p>
            At ReadySet, we believe getting started shouldn&apos;t be the hardest part.
          </p>
          <p className="text-[#52525B]">
            Too many ideas get stuck because people don&apos;t know where to begin, how to
            organise their work or what tools to use.
          </p>
          <p className="text-[#52525B]">
            We create practical, thoughtfully designed digital toolkits that help you go from idea
            to action — without building everything from scratch.
          </p>
          <p className="font-display text-2xl sm:text-3xl font-semibold text-[#18181B] pt-2">
            Less figuring things out. More getting things done.
          </p>
          <p className="font-medium text-[#1D4ED8]">
            ReadySet. Everything you need to get started.
          </p>
        </div>

        <div className="pt-8 border-t border-zinc-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-[#F3F1EC] rounded-xl p-5 space-y-1.5">
            <div className="font-mono text-xs text-[#1D4ED8]">01</div>
            <h2 className="font-display text-base font-semibold text-[#18181B]">No bloat</h2>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Only the sheets, documents, and checklists you actually open during a project.
            </p>
          </div>
          <div className="bg-[#F3F1EC] rounded-xl p-5 space-y-1.5">
            <div className="font-mono text-xs text-[#65A30D]">02</div>
            <h2 className="font-display text-base font-semibold text-[#18181B]">No lock-in</h2>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Built for everyday formats like Google Sheets, Excel, Docs, and PDF.
            </p>
          </div>
          <div className="bg-[#F3F1EC] rounded-xl p-5 space-y-1.5">
            <div className="font-mono text-xs text-[#EA580C]">03</div>
            <h2 className="font-display text-base font-semibold text-[#18181B]">No accounts</h2>
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed">
              Browse freely, buy directly when checkout is live, and download cleanly.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 min-h-[44px] px-6 py-3 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg transition-colors"
          >
            <span>Explore the kits</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center min-h-[44px] px-5 py-3 text-sm font-medium text-[#18181B] bg-white border border-zinc-300 hover:bg-[#F3F1EC] rounded-lg transition-colors"
          >
            Read FAQs
          </Link>
        </div>
      </div>
    </div>
  );
}
