/// <reference types="cypress" />

import { HomePage } from "../../pages/homePage";
describe('Settings Page tests',()=>{
    const homePage = new HomePage();
    beforeEach(()=>{
        homePage.visit();
        homePage.acceptAllCoockies();
        homePage.clickMenuIcon();
        homePage.clickSignIn();

    });
    it.only('should log in via API and store JWT in localStorage', () => {

         
        cy.login('playtestforme@gmail.com', 'Abcd-1234').debug();
    
        // You can assert that the JWT is stored in localStorage
        cy.window().its('localStorage.jwt').should('exist');
    
        // Further assertions after login
      });

})