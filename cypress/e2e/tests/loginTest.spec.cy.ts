import { HomePage } from "../../pages/homePage";
import { SignInPage } from "../../pages/signInPage";

describe("Home Page tests", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  let dynamicUrl: any;

  beforeEach(function() {
    cy.fixture('loginData').as('loginData');
    homePage.visit();
    homePage.acceptAllCoockies();
  });

  it("sign in test", function() {
    const { validUser } = this.loginData;
    homePage.clickMenuIcon();
    homePage.clickSignIn();
    cy.loginViaUi(validUser.email, validUser.password);
    cy.origin('https://app.swaggerhub.com', () => {
    cy.location('pathname').should('include', '/home');
    cy.get('#headlessui-menu-button-\\:rh\\:').should('be.visible');
    });
  });
});
