/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/experts',
        permanent: true
      }
    ];
  },
  images: {
    domains: [
      'astrocrmmedia.obrio.net'
    ]
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  }
};

module.exports = nextConfig;
