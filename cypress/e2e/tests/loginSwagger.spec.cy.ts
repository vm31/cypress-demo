
import { utilityFunctions } from "../../support/utils";

describe("Home Page tests", () => {

  beforeEach(function() {
    Cypress.config('baseUrl', 'https://swagger.io');
    cy.fixture('loginData').as('loginData');
    utilityFunctions.launch('/')
    utilityFunctions.checkUrlContains('/')
    // utilityFunctions.isVisible(homePageBeforeLogin.signInBtn)
  });

//swagger.io login successful
  it("sign in test", function() {
    const validUser = this.loginData.validUser.email;
    const password = this.loginData.validUser.password;
    utilityFunctions.clickElementText('Sign In')
    cy.loginViaUi(validUser,password);
    cy.origin('https://app.swaggerhub.com', { args: [validUser] }, ([validUser]) => {
      cy.location('pathname').should('include', '/home');
      cy.get('#headlessui-menu-button-\\:rh\\:').should('be.visible').click();
      cy.get('.gap-4 > .grid > div[role="none"]').contains(validUser);
    });
  });
  
});
