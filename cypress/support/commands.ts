    // cypress/support/commands.ts

// Custom command to log in via API

Cypress.Commands.add('login', (email: string, password: string) => {
    
    cy.request({
        method: 'POST',
        url: 'https://auth.id.smartbear.com',
        body: {
            user: {
                email: email,
                password: password
            }
        }
    })
    .then((resp) => {
        // Assuming the JWT is in resp.body.user.token, adjust if needed
        window.localStorage.setItem('jwt', resp.body.user.token);
    });
});

// Extend Cypress Chainable interface for TypeScript
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to log in
       * @example cy.login('email@example.com', 'password')
       */
      login(email: string, password: string): Chainable<void>;
    }
  }
}

export {};
