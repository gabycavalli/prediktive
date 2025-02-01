//const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
      
//       // implement node event listeners here
//     },
//     specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
//     supportFile: 'cypress/support/commands.ts',
//   },
// });

// cypress.config.ts
import { defineConfig } from 'cypress';
import webpackPreprocessor from '@cypress/webpack-preprocessor';
import webpackConfig from './cypress/webpack.config';

export default defineConfig({
  e2e: {
     reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports', // Directorio donde se almacenarán los reportes JSON
      overwrite: false, // No sobrescribir reportes anteriores
      html: true, // Generar el reporte en formato HTML
      json: true, // Generar el reporte en formato JSON
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

