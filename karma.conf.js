'use strict';

const path = require('path');

module.exports = function(config) {
  config.set({
    customLaunchers: {
      ChromeStableExtension: {
        base: 'Chrome',
        chromeDataDir: path.join(__dirname, 'userdata_chromestable'),
        flags: [
          '--force-dev-mode-highlighting',
          // NOTE: don't wrap path with quote
          `--load-extension=${path.join(__dirname, 'extension').replace(/ /g, '\\ ')}`,
        ],
      },
      ChromeCanaryExtension: {
        base: 'ChromeCanary',
        chromeDataDir: path.join(__dirname, 'userdata_chromecanary'),
        flags: [
          '--force-dev-mode-highlighting',
          // NOTE: don't wrap path with quote
          `--load-extension=${path.join(__dirname, 'extension').replace(/ /g, '\\ ')}`,
        ],
      },
    },
  });
};
