Edited code file:

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turboMode: true,
  },
  /* Add the following line */
  cssLoaderOptions: {
    modules: {
      localIdentName: "[path][name]__[local]___[hash:base64:5]",
    },
  },
  /* Add the following line */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;