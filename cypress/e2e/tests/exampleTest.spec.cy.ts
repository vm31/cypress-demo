import { constant } from "cypress/types/lodash";
import { HomePage } from "../../pages/homePage";
import { SignInPage } from "../../pages/signInPage";

describe('Home Page tests',() => {
    const homePage = new HomePage();
    const signInPage = new SignInPage();
    let dynamicUrl:string;

    beforeEach(()=>{
        homePage.visit();
        homePage.acceptAllCoockies();
    });
    it('sign in test',()=>{
        homePage.clickMenuIcon();
        homePage.clickSignIn();

        cy.origin('https://auth.id.smartbear.com', () => {
            cy.url().then(url => {
                dynamicUrl = url;
                cy.log('******************dynamicurl is:*****',dynamicUrl);
                
                cy.log('________i am state value------:',dynamicUrl.split('=')[1]);
            
                cy.visit(dynamicUrl)
              });
         
            //cy.then(() => cy.visit(dynamicUrl));
            // cy.get('#username').should('be.visible').type("abcd@abcd.com").click();
            //signInPage.enterEmail('vmiddela@gmail.com');
        });
        cy.log('dynamicurl is:',dynamicUrl);
        cy.loginViaUi("abcd@abcd.com")
    })
      

});