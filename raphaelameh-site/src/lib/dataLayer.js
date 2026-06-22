/**
 * Helpers for pushing events to the GTM dataLayer.
 * All functions are no-ops during SSR (no window).
 */

function push(obj) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

function gtag() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  // gtag() pushes the raw arguments object, matching gtag.js behaviour
  window.dataLayer.push(arguments);
}

export function grantConsent() {
  gtag('consent', 'update', {
    analytics_storage: 'granted',
  });
  push({ event: 'consent_granted' });
}

export function denyConsent() {
  push({ event: 'consent_denied' });
}

export function trackCTAClick(ctaType, location) {
  push({ event: 'cta_click', cta_type: ctaType, cta_location: location });
}

export function trackChecklistDownload() {
  push({ event: 'checklist_download' });
}

export function trackOutboundClick(url, label) {
  push({ event: 'outbound_click', outbound_url: url, outbound_label: label });
}

export function trackServiceInterest(serviceSlug) {
  push({ event: 'service_interest', service_slug: serviceSlug });
}

export function trackArticleClick(articleSlug) {
  push({ event: 'article_click', article_slug: articleSlug });
}

export function trackFAQInteraction(question) {
  push({ event: 'faq_interaction', faq_question: question });
}

export function trackScrollDepth(percentage) {
  push({ event: 'scroll_depth', scroll_percentage: percentage });
}
