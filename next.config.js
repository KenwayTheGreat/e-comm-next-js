module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: {
        loader: 'babel-loader',
      },
    });
    return config;
  },
};
