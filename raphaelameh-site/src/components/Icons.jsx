// Custom SVG icons for Raphael Ameh's brand
// Style: thin line, navy stroke, gold accents, geometric precision

export function IconAudit({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 9h10M8 13h7M8 17h10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="24" cy="22" r="6" stroke="#B8860B" strokeWidth="1.5" />
      <path d="M28.5 26.5L31 29" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22 22l1.5 1.5 3-3" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconAnalytics({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 22l5-7 4 4 5-8 4 5" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="15" r="1.5" fill="#B8860B" />
      <circle cx="21" cy="11" r="1.5" fill="#B8860B" />
      <path d="M7 26h18" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function IconEngineering({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="21" y="5" width="8" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="12" y="21" width="8" height="6" rx="1.5" stroke="#B8860B" strokeWidth="1.5" />
      <path d="M7 11v4a3 3 0 003 3h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M25 11v4a3 3 0 01-3 3h-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="16" cy="18" r="1" fill="#B8860B" />
      <path d="M16 19v2" stroke="#B8860B" strokeWidth="1.2" />
    </svg>
  );
}

export function IconML({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="4" stroke="#B8860B" strokeWidth="1.5" />
      <circle cx="16" cy="4" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="16" cy="28" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="28" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="4" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="28" cy="22" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M16 6.5v5.5M16 20v5.5M6.2 11.2l6 3M19.8 14.2l6-3M6.2 20.8l6-3M19.8 17.8l6 3" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function IconAI({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3l2 6.5h6.5l-5.25 3.75L21 20l-5-4-5 4 1.75-6.75L7.5 9.5H14L16 3z" stroke="#B8860B" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 24l2-3M24 24l-2-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="6" y="24" width="20" height="5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 26.5h8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export function IconAdvisory({ className = 'w-7 h-7' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 7v5l3.5 2" stroke="#B8860B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 23v3a2 2 0 002 2h8a2 2 0 002-2v-3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 28h6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export function IconArrowRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function IconArrowUp({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  );
}

export function IconLinkedIn({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// Map service slugs to icon components
export const SERVICE_ICONS = {
  'data-ai-audits': IconAudit,
  'marketing-analytics': IconAnalytics,
  'data-engineering': IconEngineering,
  'data-science-ml': IconML,
  'ai-applications': IconAI,
  'data-ai-advisory': IconAdvisory,
};
