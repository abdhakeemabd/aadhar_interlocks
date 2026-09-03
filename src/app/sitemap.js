export default function sitemap() {
  const baseUrl = 'https://aadharinterlocks.com';

  // Add all main routes of the website
  const routes = [
    '',
    '/about',
    '/products',
    '/gallery',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
