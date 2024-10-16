import { utilityFunctions } from "../../support/utils";
import { locators } from "../../support/locators";


describe('test any applicaton', () => {

    beforeEach(function(){
        Cypress.config('baseUrl', 'https://uwfactuuronline.athlon.com/login');
        utilityFunctions.launch('/');
        cy.fixture('loginData').as('loginData');
    })
    it.only("check incorrect username and password error message text", function(){
        utilityFunctions.checkUrlContains('/login');
        utilityFunctions.enterText(locators.loginPage.usernameInputBox,this.loginData.validUser.email);
        utilityFunctions.enterText(locators.loginPage.passwordInputBox,this.loginData.validUser.password);
        utilityFunctions.clickElementBySelector(locators.loginPage.loginButton);
        utilityFunctions.isVisible(locators.loginPage.errorMessage);
        utilityFunctions.getText(locators.loginPage.errorMessage).then((text)=>{
          expect(text).to.equal('Unknown combination of username and password');
        })
      

})
});

