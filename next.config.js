// #region imports
const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass')

// #endregion

// next.config.js
const nextConfig = {
  // next-offline options:
  dontAutoRegisterSw: true, // since we want runtime registration

  /* static page export options: */
  exportPathMap: function () {
    return {
      '/': {
        page: '/'
      },
      '/login': {
        page: '/login'
      },
      '/page1': {
        page: '/page1'
      },
      '/private1': {
        page: '/private1'
      },
    };
  },
};

module.exports = withSass(withOffline(nextConfig));
