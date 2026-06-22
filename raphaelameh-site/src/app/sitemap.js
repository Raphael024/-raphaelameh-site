export default function sitemap() {
  const baseUrl = 'https://raphaelameh.com';

  const routes = [
    '',
    '/about',
    '/services',
    '/case-studies',
    '/contact',
    '/insights',
    '/checklist',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}