Edited code snippet:

/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  // Adding top navigation bar with links to Docs, Learn, Templates, and Deploy pages
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://analytics.google.com https://www.google.com https://www.googletagmanager.com; connect-src 'self' https://analytics.google.com https://www.google-analytics.com; img-src 'self' data: https://www.google-analytics.com https://www.gravatar.com https://source.unsplash.com; style-src 'self' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com; frame-src 'self' https://www.youtube.com https://docs.google.com;"
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          {
            key: 'Feature-Policy',
            value: "geolocation 'none'; microphone 'none'; camera 'none'"
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31556952000, immutable'
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          }
        ]
      },
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap>; rel=preload; as=style'
          },
          {
            key: 'Link',
            value: '<https://www.googletagmanager.com/gtag/js?id=G-G1234567>; rel=preload; as=script'
          },
          {
            key: 'Link',
            value: '<https://www.google-analytics.com/analytics.js>; rel=preload; as=script'
          },
          {
            key: 'Link',
            value: '<https://www.google.com/recaptcha/api.js?render=explicit>; rel=preload; as=script'
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;