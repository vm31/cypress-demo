import { HomePageBeforeLogin } from "../../pages/homePageBeforeLogin";
import { SignInPage } from "../../pages/signInPage";

describe("Home Page tests", () => {
  const homePageBeforeLogin = new HomePageBeforeLogin();
  const signInPage = new SignInPage();

  

  beforeEach(function() {
    cy.fixture('loginData').as('loginData');
    homePageBeforeLogin.visit();
  });

  it("sign in test", function() {
    const validUser = this.loginData.validUser.email;
    const password = this.loginData.validUser.password;
    homePageBeforeLogin.clickSignIn();
    cy.loginViaUi(validUser,password);
    cy.origin('https://app.swaggerhub.com', { args: [validUser] }, ([validUser]) => {
    cy.location('pathname').should('include', '/home');
    cy.get('#headlessui-menu-button-\\:rh\\:').should('be.visible').click();
    cy.get('.gap-4 > .grid > div[role="none"]').contains(validUser);
    });
  });
});
