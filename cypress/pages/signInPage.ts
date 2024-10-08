export class SignInPage {
    
    emailInputBox ='#username';
    passwordInputBox = '#password';
    continuePasswordBtn ='.ca0df71c7 > .ccfd14389';

    enterEmail(email:string){
        cy.get(this.emailInputBox)
        .should('be.visible')
        .type(email);
    }
    enterPassword(password:string){
        cy.get(this.passwordInputBox)
        .should("be.visible")
        .click() // will fail if removed
        .type(password);
    }
    clickContinueBtn(){
        cy.contains("Continue").click();
    }
    clickpasswordContinueBtn(){
        cy.get(this.continuePasswordBtn)
        .should('be.visible')
        .click();
    }
}
