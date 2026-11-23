import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Link } from './components/Link';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { AboutPage } from './pages/AboutPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import {
  PrivacyPolicyPage,
  RefundPolicyPage,
  TermsPage,
} from './pages/PolicyPages';
import { useAppRoute } from './utils/routing';

export default function App() {
  const route = useAppRoute();

  const renderPage = () => {
    switch (route.page) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage initialCategory={route.initialCategory} />;
      case 'product':
        return <ProductDetailPage slug={route.slug} />;
      case 'collections':
        return <CollectionsPage slug={route.slug} />;
      case 'about':
        return <AboutPage />;
      case 'faq':
        return <FaqPage />;
      case 'contact':
        return <ContactPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      case 'terms':
        return <TermsPage />;
      case 'refund-policy':
        return <RefundPolicyPage />;
      case 'not-found':
      default:
        return (
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center space-y-5">
            <p className="font-mono text-xs text-[#1D4ED8]">404</p>
            <h1 className="font-display text-3xl font-bold text-[#18181B]">
              Page not found
            </h1>
            <p className="text-base text-[#52525B] max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist. Head back to browse our
              digital toolkits.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg"
              >
                Go Home
              </Link>
              <Link
                to="/shop"
                className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#18181B] bg-white border border-zinc-300 hover:bg-[#F3F1EC] rounded-lg"
              >
                Open Shop
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#18181B]">
      <Navbar currentRoute={route} />
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
