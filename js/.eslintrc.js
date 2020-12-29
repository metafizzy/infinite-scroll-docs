/* eslint-env node */

module.exports = {
  plugins: [ 'metafizzy' ],
  extends: 'plugin:metafizzy/browser',
  parserOptions: {
    ecmaVersion: 2018,
  },
  globals: {
    FizzyDocs: 'readonly',
    fizzyUIUtils: 'readonly',
    InfiniteScroll: 'readonly',
    InfiniteScrollDocs: 'readonly',
    Masonry: 'readonly',
    imagesLoaded: 'readonly',
    utils: 'readonly',
  },
  rules: {
  },
};
