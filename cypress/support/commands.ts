// cypress/support/commands.ts
import { SignInPage } from "../pages/signInPage";

let dynamicUrl: any;

Cypress.Commands.add("loginViaUi", (email: string, password: string) => {
  cy.origin(
    "https://auth.id.smartbear.com",
    { args: { email,password } },
    ({ email,password }) => {
      cy.url().then((url) => {
        dynamicUrl = url;
      });
      cy.then(() => cy.visit(dynamicUrl));
      cy.get('#username').should('be.visible');
      cy.get("#username").type(email);
      cy.contains("Continue").click();
     cy.contains('Continue logging in');
      cy.get("#password").should("be.visible").click().type(password);
      cy.get(".ca0df71c7 > .ccfd14389").click();
    }
  );
});

Cypress.Commands.add('iGet', (apiUrl: string) => {
  cy.request('GET', apiUrl).then((response) => {
    return response;
  });
});


declare global {
  namespace Cypress {
    interface Chainable {
      iGet(apiUrl: string): Chainable<Response<any>>;
      loginViaUi(email: string, password: string): Chainable<void>;
      login(
        stateValue: string,
        email: string,
        password: string
      ): Chainable<void>;
    }
  }
}

export {};
