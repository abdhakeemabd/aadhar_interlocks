export default function robots() {
  const baseUrl = 'https://aadharinterlocks.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
