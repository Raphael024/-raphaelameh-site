import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import { GTMHead, GTMNoScript } from '@/components/GTM';
import { SITE } from '@/lib/constants';

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Data & AI Consultant — ${SITE.name} | Strategy, Analytics, ML & AI`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `Data & AI Consultant — ${SITE.name}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png?v=2',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Data & AI Consultant`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Data & AI Consultant — ${SITE.name}`,
    description: SITE.description,
    images: ['/images/og-image.png?v=2'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Raphael Ameh',
              url: SITE.url,
              jobTitle: 'Data & AI Consultant',
              description: SITE.description,
              knowsAbout: [
                'Data Engineering',
                'Machine Learning',
                'AI Applications',
                'Marketing Analytics',
                'Business Intelligence',
                'Data Strategy',
              ],
              sameAs: [SITE.linkedin],
              image: `${SITE.url}/images/logo.png`,
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              logo: `${SITE.url}/images/logo.png`,
              sameAs: [SITE.linkedin],
            }),
          }}
        />

        {/* Google Tag Manager + Consent Mode v2 */}
        <GTMHead />
      </head>

      <body className="font-sans bg-cream">
        <GTMNoScript />
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}