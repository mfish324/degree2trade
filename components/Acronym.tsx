"use client";

import { useState, useRef, useEffect } from "react";
import { getAcronymDefinition } from "@/lib/acronyms";

interface AcronymProps {
  term: string;
  children?: React.ReactNode;
}

export function Acronym({ term, children }: AcronymProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<"top" | "bottom">("top");
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const definition = getAcronymDefinition(term);

  // Calculate tooltip position based on available space
  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const tooltipHeight = 80; // Approximate tooltip height

      if (spaceAbove < tooltipHeight) {
        setPosition("bottom");
      } else {
        setPosition("top");
      }
    }
  }, [isVisible]);

  if (!definition) {
    return <span>{children || term}</span>;
  }

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleClick = () => setIsVisible(!isVisible);
  const handleBlur = () => setIsVisible(false);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onBlur={handleBlur}
        tabIndex={0}
        className="border-b border-dotted border-primary/50 cursor-help hover:text-primary transition-colors"
        aria-describedby={`tooltip-${term}`}
      >
        {children || term}
      </span>
      {isVisible && (
        <div
          ref={tooltipRef}
          id={`tooltip-${term}`}
          role="tooltip"
          className={`absolute z-50 w-64 px-3 py-2 text-sm bg-surface-light border border-surface-light rounded-lg shadow-lg text-text-primary left-1/2 -translate-x-1/2 ${
            position === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <div className="font-semibold text-primary mb-1">{term}</div>
          <div className="text-text-secondary text-xs leading-relaxed">{definition}</div>
          {/* Arrow */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-surface-light border-surface-light rotate-45 ${
              position === "top"
                ? "bottom-0 translate-y-1/2 border-r border-b"
                : "top-0 -translate-y-1/2 border-l border-t"
            }`}
          />
        </div>
      )}
    </span>
  );
}

// Helper component to automatically wrap acronyms in text
interface TextWithAcronymsProps {
  text: string;
  className?: string;
}

export function TextWithAcronyms({ text, className }: TextWithAcronymsProps) {
  // List of acronyms to look for (sorted by length descending to match longer ones first)
  const acronyms = [
    "NCLEX-RN", "GI Bill", "A&P",
    "FAFSA", "NABCEP", "NREMT", "NICET",
    "HRSA", "WIOA", "JATC", "OSHA", "PHCC", "IBEW", "AACN", "NAEMT",
    "HVAC", "ACLS", "PALS", "AEMT",
    "EMT", "BSN", "CDL", "EPA", "NEC", "AWS", "ICC", "FAA", "TAA", "GED", "GPA", "BLS", "CPR",
    "RN", "LPN", "VA"
  ];

  // Create regex pattern
  const pattern = new RegExp(`\\b(${acronyms.join("|")})\\b`, "g");

  // Split text and wrap acronyms
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  const regex = new RegExp(pattern);
  while ((match = regex.exec(text)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    // Add acronym component
    parts.push(<Acronym key={match.index} term={match[0]} />);
    lastIndex = regex.lastIndex;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <span className={className}>{parts}</span>;
}
