import { constant } from "cypress/types/lodash";
import { HomePage } from "../../pages/homePage";
import { SignInPage } from "../../pages/signInPage";

describe('Home Page tests',() => {
    const homePage = new HomePage();
    const signInPage = new SignInPage();
    let dynamicUrl:any;

    beforeEach(()=>{
        homePage.visit();
        homePage.acceptAllCoockies();
    });
    it('sign in test',()=>{
        homePage.clickMenuIcon();
        homePage.clickSignIn();
        cy.loginViaUi('playtestforme@gmail.com');
//        cy.get('#topbar-logo-img').should('be.visible').debug();
      })
});