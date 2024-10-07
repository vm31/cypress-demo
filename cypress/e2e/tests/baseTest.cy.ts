describe('Check if baseUrl is accessible', () => {
  it('Should load the baseUrl', () => {
    cy.request('/')
      .its('status')
      .should('eq', 200);  // Expect a 200 OK response
  });
});