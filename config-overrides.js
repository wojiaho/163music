const path = require('path');

module.exports = {
  webpack(config, env) {
    // ...add your webpack config
    return {
      ...config,
      resolve: {
        alias: {
          '@': path.resolve(__dirname, 'src'),
          images: path.resolve(__dirname, '/src/images'),
        },
      },
    };
  },
};

