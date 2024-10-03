export class SignInPage {
    
    emailInputBox ='#username';

    enterEmail(email:string){
        cy.get(this.emailInputBox)
        .should('be.visible')
        .type(email);
    }    
}
