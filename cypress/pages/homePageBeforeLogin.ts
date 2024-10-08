export class HomePageBeforeLogin {
    acceptCoockieBtn = '.ch2-dialog-actions > .ch2-allow-all-btn';
    menuIcon = '.nav-main-toggle';
    signInBtn  = '.nav-item-login > .btn';

    visit(){
        cy.visit('/');
    }
     acceptAllCoockies(){
        cy.get(this.acceptCoockieBtn).should('be.visible').click();
     }
     clickMenuIcon(){
        cy.get(this.menuIcon).should('be.visible').click();
     }
     clickSignIn(){
        cy.get(this.signInBtn).should('be.visible').click();
     }
   
}