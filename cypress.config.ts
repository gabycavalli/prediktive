import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';
import webpackConfig from './cypress/webpack.config';

export default defineConfig({
  e2e: {
     reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      video: true,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: webpackConfig,
        watchOptions: {},
      };
      on('file:preprocessor', webpackPreprocessor(options));
      return config;
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});

