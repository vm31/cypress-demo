export const utilityFunctions = {
    launch:(url:string)=>{
        cy.visit(url)
    },
    isVisible:(selector: string) => {
        cy.get(selector).should('be.visible');

    },

    checkUrlContains:(path:string) => {
        cy.url().should('include',path);
    },
    clickElementBySelector:(selector:string)=>{
        cy.get(selector).should('be.visible').click();
    },
    clickElementText:(text:string)=>{
        cy.contains(text).should('be.visible').click();
    },

}