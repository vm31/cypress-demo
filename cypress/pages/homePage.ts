export class HomePage {
    acceptCoockieBtn = '.ch2-dialog-actions > .ch2-allow-all-btn';
    menuIcon = '.nav-main-toggle';
    signInBtn  = '.nav-item-login > .btn';

    visit(){
        cy.visit('/');
    }
     acceptAllCoockies(){
        cy.get(this.acceptCoockieBtn).click();
     }
     clickMenuIcon(){
        cy.get(this.menuIcon).click();
     }
     clickSignIn(){
        cy.contains('Sign In').click();
     }
}