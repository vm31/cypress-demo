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
      cy.get("#password").should("be.visible").click().type(password);
      cy.get(".ca0df71c7 > .ccfd14389").click();
    }
  );
});

Cypress.Commands.add("firstBackendCall", (requestUrl:string) => {
  cy.request({
    method: "GET",
    url: requestUrl
  }).then((resp) => {
    // Check for success
    if (resp.status === 200) {
      cy.log("Request successful");
    } else {
      throw new Error("Get devices request failed");
    }
  });
});


// Extend Cypress Chainable interface for TypeScript support
declare global {
  namespace Cypress {
    interface Chainable {
      firstBackendCall(requestUrl:string):Chainable<void>;
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
