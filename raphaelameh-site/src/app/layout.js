import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
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
  },
  twitter: {
    card: 'summary_large_image',
    title: `Data & AI Consultant — ${SITE.name}`,
    description: SITE.description,
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
                'Data Engineering', 'Machine Learning', 'AI Applications',
                'Marketing Analytics', 'Business Intelligence', 'Data Strategy',
              ],
              sameAs: [SITE.linkedin],
            }),
          }}
        />
      </head>
      <body className="font-sans bg-cream">
        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
