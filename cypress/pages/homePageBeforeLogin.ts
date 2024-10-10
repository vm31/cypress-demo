export class HomePageBeforeLogin {
    signInBtn  = '.nav-item-login > .btn';

    visit(){
        cy.visit('/');
    }
   clickSignIn(){
        cy.get(this.signInBtn).should('be.visible').click();
   }
   
}