const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  /**
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'content',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './Button': './src/components/Button.js'
        },
      })
    );
    return config;
  },
};