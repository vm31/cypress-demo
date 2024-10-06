import { HomePage } from "../../pages/homePage";

describe('Settings Page tests', () => {
    let dynamicUrl: string;
    let stateValue: string;
    const homePage = new HomePage();

    beforeEach(() => {
        homePage.visit();
        homePage.acceptAllCoockies(); // Corrected the method name
        homePage.clickMenuIcon();
        homePage.clickSignIn();
    });

    it.skip('should log in via API and store JWT in localStorage', () => {
        cy.origin('https://auth.id.smartbear.com', () => {
            // Capture the dynamic URL
            cy.url().then(url => {
                dynamicUrl = url;
                cy.log('Dynamic URL:', dynamicUrl);

                // Extract the stateValue from the URL
                stateValue = dynamicUrl.split('=')[1]; // Adjust split logic if necessary
                cy.log('State Value:', stateValue);

                // Now perform the login using the captured stateValue
                cy.login(stateValue, 'playtestforme@gmail.com', 'Abcd_1234');
            });

            // Assert that the JWT is stored in localStorage
            cy.window().its('localStorage.jwt').should('exist');

            // Further assertions can be done here after login
        });
    });
});