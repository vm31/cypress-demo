// cypress/support/index.ts

import './commands'; // Ensure you have this import for custom commands

// Cypress on uncaught exception listener
Cypress.on('uncaught:exception', (err: Error) => {
  // Log the error to the console for debugging
  console.error('Uncaught Exception:', err);

  // Ignore the error if jQuery is not defined
  if (err.message.includes('jQuery is not defined')) {
      return false; // Prevent Cypress from failing the test
  }

  // Allow Cypress to fail for all other uncaught exceptions
  return true; 
});
