// cypress.config.ts
import { defineConfig } from 'cypress';

export default defineConfig({
  env: {
    HTTP_PROXY: 'http://nlproxy.resultinfra.com:3128',
    HTTPS_PROXY: 'http://nlproxy.resultinfra.com:3128',
  },
  e2e: {
    chromeWebSecurity: false,
    baseUrl: "https://swagger.io",
    fixturesFolder: 'cypress/fixtures', // Path to fixtures folder
    supportFile: 'cypress/support/index.ts', // Path to support file
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Pattern for test files in the e2e folder
    video: false, // Disable video recording if you don't need it
    screenshotsFolder: 'cypress/screenshots', // Path for screenshots
    videosFolder: 'cypress/videos' // Path for videos
  },
});
