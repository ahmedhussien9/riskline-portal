module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["riskline.riskline.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
