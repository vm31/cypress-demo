// cypress/support/commands.ts

Cypress.Commands.add('loginViaUi', ( email: string) => {
    
      cy.get('#username').type(email)
      cy.contains('continue').click();
  })


Cypress.Commands.add('login', (stateValue: string, email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'https://auth.id.smartbear.com/api/login', // Ensure this is the correct URL for login
    headers: {
      
    },
    body: {
      state: stateValue,
      username: email,
      password: password
    },
    failOnStatusCode: false  // Optional: Handle failures manually
  })
  .then((resp) => {
    // Assuming JWT token is in resp.body.token
    if (resp.status === 200 && resp.body.token) {
      window.localStorage.setItem('jwt', resp.body.token);
      cy.log('JWT token stored');
    } else {
      throw new Error('Login failed');
    }
  });
});

// Extend Cypress Chainable interface for TypeScript support
declare global {
  namespace Cypress {
    interface Chainable {
      loginViaUi(email: string): Chainable<void>;
      login(stateValue: string, email: string, password: string): Chainable<void>;
    }
  }
}

export {};
