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
      cy.get("#username").type(email);
      cy.contains("Continue").click();
      cy.get("#password").should("be.visible").click().type(password);
      cy.get(".ca0df71c7 > .ccfd14389").click();
    }
  );
});

Cypress.Commands.add(
  "login",
  (stateValue: string, email: string, password: string) => {
    cy.request({
      method: "POST",
      url: "https://auth.id.smartbear.com/api/login", // Ensure this is the correct URL for login
      headers: {},
      body: {
        state: stateValue,
        username: email,
        password: password,
      },
      failOnStatusCode: false, // Optional: Handle failures manually
    }).then((resp) => {
      // Assuming JWT token is in resp.body.token
      if (resp.status === 200 && resp.body.token) {
        window.localStorage.setItem("jwt", resp.body.token);
        cy.log("JWT token stored");
      } else {
        throw new Error("Login failed");
      }
    });
  }
);
Cypress.Commands.add("firstBackendCall", (requestUrl:string) => {
  cy.request({
    method: "GET",
    url: requestUrl,
  })
});


// Extend Cypress Chainable interface for TypeScript support
declare global {
  namespace Cypress {
    interface Chainable {
      firstBackendCall(requestUrl:string):Chainable<Cypress.Response<any>>
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
