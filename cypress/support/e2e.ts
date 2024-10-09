import 'cypress-mochawesome-reporter/register';

// Optional: Set up global hooks or other configurations
beforeEach(() => {
  cy.log('Starting a new test');
});

after(() => {
  cy.log('All tests completed');
});
