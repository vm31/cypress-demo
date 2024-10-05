// cypress/support/commands.ts
let dynamicUrl: any;
Cypress.Commands.add("loginViaUi", (email: string) => {
  cy.origin(
    "https://auth.id.smartbear.com",
    { args: { email } },
    ({ email }) => {
      cy.url().then((url) => {
        dynamicUrl = url;
      });
      cy.then(() => cy.visit(dynamicUrl));
      cy.get("#username").type(email);
      cy.contains("Continue").click();
      cy.get('#password').should('be.visible').click().type('Abcd_1234');
      cy.get('.ca0df71c7 > .ccfd14389').click();
   
    }

  );
});

// Cypress.Commands.add("login", (userId, password) => {
//   cy.origin("https://some-sso.page",
//     { args: { userId, password } },             // variables passed in
//     ({ userId, password }) => {                 // inside, unwrapped (destructured)

//       cy.wrap(userId).should("eq", "someUser"); // passes

//       cy.get('input[placeholder="UserID"]').type(userId);
//       cy.get('input[placeholder="Password"]').type(password);
//       cy.contains("SIGN IN").click();
//     }
//   );
// });
// Cypress.Commands.add( "waitForElementVisibility",
//   ()=>{

//   }
// )
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


// Extend Cypress Chainable interface for TypeScript support
declare global {
  namespace Cypress {
    interface Chainable {
      loginViaUi(email: string): Chainable<void>;
      login(
        stateValue: string,
        email: string,
        password: string
      ): Chainable<void>;
    }
  }
}

export {};
