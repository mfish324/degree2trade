"use client";

import { useState, useEffect } from "react";

// Standard IAB ad sizes
export type AdSize =
  | "leaderboard"      // 728x90 - top of page, between content
  | "rectangle"        // 300x250 - sidebar, in-content
  | "large-rectangle"  // 336x280 - sidebar, in-content
  | "mobile-banner"    // 320x50 - mobile header/footer
  | "mobile-large"     // 320x100 - mobile in-content
  | "skyscraper"       // 160x600 - sidebar
  | "wide-skyscraper"; // 300x600 - sidebar

const adSizes: Record<AdSize, { width: number; height: number; label: string }> = {
  leaderboard: { width: 728, height: 90, label: "Leaderboard" },
  rectangle: { width: 300, height: 250, label: "Rectangle" },
  "large-rectangle": { width: 336, height: 280, label: "Large Rectangle" },
  "mobile-banner": { width: 320, height: 50, label: "Mobile Banner" },
  "mobile-large": { width: 320, height: 100, label: "Mobile Large" },
  skyscraper: { width: 160, height: 600, label: "Skyscraper" },
  "wide-skyscraper": { width: 300, height: 600, label: "Wide Skyscraper" },
};

interface AdPlaceholderProps {
  size: AdSize;
  className?: string;
  // For responsive ads that switch sizes on mobile
  mobileSize?: AdSize;
  // Optional label override
  label?: string;
  // Show in production (default: only in development)
  showInProduction?: boolean;
}

export function AdPlaceholder({
  size,
  mobileSize,
  className = "",
  label,
  showInProduction = false
}: AdPlaceholderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Check if we should show placeholders
    const showPlaceholders =
      process.env.NODE_ENV === "development" ||
      process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === "true" ||
      showInProduction;

    setShouldShow(showPlaceholders);

    // Handle responsive sizing
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [showInProduction]);

  if (!shouldShow) {
    return null;
  }

  const currentSize = isMobile && mobileSize ? mobileSize : size;
  const { width, height, label: sizeLabel } = adSizes[currentSize];
  const displayLabel = label || sizeLabel;

  return (
    <div
      className={`flex items-center justify-center mx-auto ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: "100%"
      }}
    >
      <div
        className="w-full h-full border-2 border-dashed border-gray-400 bg-gray-100 dark:bg-gray-800 dark:border-gray-600 rounded-lg flex flex-col items-center justify-center text-gray-500 dark:text-gray-400"
      >
        <svg
          className="w-6 h-6 mb-1 opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <span className="text-xs font-medium">{displayLabel}</span>
        <span className="text-xs opacity-75">{width} × {height}</span>
      </div>
    </div>
  );
}

// Convenience wrapper for responsive ads that auto-switch between desktop/mobile
export function ResponsiveAd({
  desktopSize = "leaderboard",
  mobileSize = "mobile-banner",
  className = "",
  label
}: {
  desktopSize?: AdSize;
  mobileSize?: AdSize;
  className?: string;
  label?: string;
}) {
  return (
    <AdPlaceholder
      size={desktopSize}
      mobileSize={mobileSize}
      className={className}
      label={label}
    />
  );
}

// In-content ad with proper spacing
export function InContentAd({ className = "" }: { className?: string }) {
  return (
    <div className={`my-8 ${className}`}>
      <ResponsiveAd
        desktopSize="leaderboard"
        mobileSize="mobile-large"
        label="Sponsored"
      />
    </div>
  );
}

// Sidebar ad component
export function SidebarAd({ sticky = false }: { sticky?: boolean }) {
  return (
    <div className={sticky ? "sticky top-24" : ""}>
      <AdPlaceholder size="rectangle" label="Sponsored" />
    </div>
  );
}
