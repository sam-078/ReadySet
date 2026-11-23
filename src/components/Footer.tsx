import { Link } from './Link';
import { STORE_META } from '../config/commerce';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-[#F3F1EC] mt-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-3">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-tight text-[#18181B] inline-block"
            >
              {STORE_META.brandName}
            </Link>
            <p className="text-sm text-[#52525B] max-w-sm leading-relaxed">
              {STORE_META.tagline} Practical digital templates, spreadsheets, planners, and
              checklists for creators, freelancers, students, and event organisers.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="space-y-3">
              <h2 className="font-display font-semibold text-[#18181B]">Store</h2>
              <ul className="space-y-2.5 text-[#52525B]">
                <li>
                  <Link to="/shop" className="hover:text-[#18181B] transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/collections" className="hover:text-[#18181B] transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/creators"
                    className="hover:text-[#18181B] transition-colors"
                  >
                    Creators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/freelancers"
                    className="hover:text-[#18181B] transition-colors"
                  >
                    Freelancers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections/students-events"
                    className="hover:text-[#18181B] transition-colors"
                  >
                    Students &amp; Events
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-semibold text-[#18181B]">Information</h2>
              <ul className="space-y-2.5 text-[#52525B]">
                <li>
                  <Link to="/about" className="hover:text-[#18181B] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-[#18181B] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#18181B] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="font-display font-semibold text-[#18181B]">Policies</h2>
              <ul className="space-y-2.5 text-[#52525B]">
                <li>
                  <Link to="/privacy" className="hover:text-[#18181B] transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-[#18181B] transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="hover:text-[#18181B] transition-colors">
                    Refund policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>© {currentYear} ReadySet. All rights reserved.</p>
          <p>Digital download toolkits · No accounts required</p>
        </div>
      </div>
    </footer>
  );
}
