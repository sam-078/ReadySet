import { useState } from 'react';
import { AlertCircle, ExternalLink, Lock } from 'lucide-react';
import { COMMERCE_CONFIG } from '../config/commerce';
import { resolveItemCheckout } from '../utils/catalog';

interface CheckoutActionProps {
  itemType: 'product' | 'bundle';
  itemId: string;
  itemName: string;
  label?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function CheckoutAction({
  itemType,
  itemId,
  itemName,
  label = 'Buy now',
  variant = 'primary',
  fullWidth = true,
}: CheckoutActionProps) {
  const [noticeVisible, setNoticeVisible] = useState(false);
  const resolution = resolveItemCheckout(itemType, itemId, COMMERCE_CONFIG);

  const buttonClasses =
    variant === 'primary'
      ? 'bg-[#1D4ED8] hover:bg-[#1E40AF] text-white'
      : 'bg-[#18181B] hover:bg-[#27272A] text-white';

  const widthClass = fullWidth ? 'w-full' : '';

  if (resolution.isAvailable && resolution.checkoutUrl) {
    return (
      <div className="space-y-2">
        <a
          href={resolution.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] ${buttonClasses} ${widthClass}`}
        >
          <span>{label}</span>
          <ExternalLink className="w-4 h-4" aria-hidden="true" />
        </a>
        <p className="text-xs text-[#71717A] flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
          <span>External checkout via {COMMERCE_CONFIG.providerName ?? 'payment provider'}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => setNoticeVisible((prev) => !prev)}
        aria-expanded={noticeVisible}
        className={`inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D4ED8] cursor-pointer ${buttonClasses} ${widthClass}`}
      >
        <span>{label}</span>
      </button>

      {noticeVisible && (
        <div
          role="status"
          className="rounded-lg border border-amber-300/80 bg-amber-50/90 p-3.5 text-xs text-zinc-800 space-y-1.5"
        >
          <div className="flex items-start gap-2 font-medium text-[#18181B]">
            <AlertCircle className="w-4 h-4 text-[#EA580C] shrink-0 mt-0.5" aria-hidden="true" />
            <span>{itemName} — Not yet available for purchase</span>
          </div>
          <p className="text-[#52525B] leading-relaxed pl-6">
            {resolution.message} No payment is collected on this site and no files are served
            publicly until your external checkout and digital delivery URLs are configured.
          </p>
        </div>
      )}
    </div>
  );
}
