import { constant } from "cypress/types/lodash";
import { HomePage } from "../../pages/homePage";
import { SignInPage } from "../../pages/signInPage";

describe("Home Page tests", () => {
  const homePage = new HomePage();
  const signInPage = new SignInPage();
  let dynamicUrl: any;

  beforeEach(() => {
    homePage.visit();
    homePage.acceptAllCoockies();
  });
  it.only("sign in test", () => {
    homePage.clickMenuIcon();
    homePage.clickSignIn();
    cy.loginViaUi("playtestforme@gmail.com", "Abcd_1234");
    cy.origin('https://app.swaggerhub.com', () => {
        cy.location('pathname', {timeout: 60000}).should('include', '/home');
        cy.get('#headlessui-menu-button-\\:rh\\:').should('be.visible');
      })
  });
});
