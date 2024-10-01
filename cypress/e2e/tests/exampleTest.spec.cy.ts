import { constant } from "cypress/types/lodash";
import { HomePage } from "../../pages/homePage";

describe('Home Page tests',() => {
    const homePage = new HomePage();

    beforeEach(()=>{
        homePage.visit();
    });
    it('click the link type',()=>{
        cy.contains('type').click();
        cy.url().should('include','commands/actions')
    })

});