module.exports = {
  env: {
    IEAPI_URL: 'https://live.ieapis.com/v1',
    PAYSTACK_PUB_KEY: 'pk_live_f9dd6908a0c8515502da8cbcda4cdc1fc1fa06ba',
    GOOGLE_ANALYTICS: 'G-74MVE3VVN1',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/components/*': ['components/*'],
    },
  },
};
