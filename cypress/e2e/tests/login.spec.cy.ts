import { utilityFunctions } from "../../support/utils";
describe('test any applicaton', () => {

    beforeEach(function(){
        Cypress.config('baseUrl', 'https://uwfactuuronline.athlon.com/login');
        utilityFunctions.launch('/');
    })
    it.only("check incorrect username and password error message text", function(){
        utilityFunctions.checkUrlContains('/login');
        utilityFunctions.enterText('#username','abcd@gmail.com');
        utilityFunctions.enterText('#password','hkjhkjh');
        utilityFunctions.clickElementBySelector('.btn');
        utilityFunctions.isVisible('.alert')
        utilityFunctions.getText('.alert').then((text)=>{
          expect(text).to.equal('Unknown combination of username and password');
        })
      

})
});

