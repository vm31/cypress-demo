import { constant } from "cypress/types/lodash";
import { HomePage } from "../../pages/homePage";
import { SignInPage } from "../../pages/signInPage";

describe('Home Page tests',() => {
    const homePage = new HomePage();
    const signInPage = new SignInPage();
    let dynamicUrl:any;

    beforeEach(()=>{
        homePage.visit();
 
    });
    it('sign in test',()=>{
      
        homePage.clickSignIn();
        cy.loginViaUi('playtestforme@gmail.com');
        cy.visit('https://app.swaggerhub.com/home');
        cy.get('#topbar-logo-img').should('be.visible').debug();
      })
});