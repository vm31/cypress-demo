// cypress/support/index.ts

import './commands';

Cypress.on('uncaught:exception', (err: Error) => {
  console.error('Uncaught Exception:', err);
  if (err.message.includes('jQuery is not defined')) {
      return false;
  }
  return true; 
});
