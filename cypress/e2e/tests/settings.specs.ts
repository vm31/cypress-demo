/// <reference types="cypress" />

import { HomePage } from "../../pages/homePage";
describe('Settings Page tests',()=>{
    let dynamicUrl:any;
    let stateValue: any;
    const homePage = new HomePage();
    beforeEach(()=>{
        homePage.visit();
        homePage.acceptAllCoockies();
        homePage.clickMenuIcon();
        homePage.clickSignIn();

    });
    it.only('should log in via API and store JWT in localStorage', () => {
        cy.origin('https://auth.id.smartbear.com', () => {
            cy.url().then(url => {
                dynamicUrl = url;
                cy.log('******************dynamicurl is:*****',dynamicUrl);
                
                stateValue = dynamicUrl.split('=')[1];
                cy.log('________i am state value------:',dynamicUrl.split('=')[1]);

              });
        cy.login(stateValue,'playtestforme@gmail.com', 'Abcd_1234');
    
        // You can assert that the JWT is stored in localStorage
        cy.window().its('localStorage.jwt').should('exist');
    
        // Further assertions after login
      });

})