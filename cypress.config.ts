// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  viewportWidth: 1280,
  viewportHeight: 1280,
  e2e: {
    setupNodeEvents(on,config){
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
    baseUrl: "https://swagger.io",
    fixturesFolder: 'cypress/fixtures', // Path to fixtures folder
    supportFile: 'cypress/support/index.ts', // Path to support file
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Pattern for test files in the e2e folder
    video: false, // Disable video recording if you don't need it
    screenshotsFolder: 'cypress/screenshots', // Path for screenshots
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos' // Path for videos
  },
});
