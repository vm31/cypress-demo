let dynamicUrl: any;

Cypress.Commands.add("loginViaUi", (email: string, password: string) => {
  cy.origin(
    "https://auth.id.smartbear.com",
    { args: { email,password } },
    ({ email,password }) => {
      cy.url().then((url) => {
        dynamicUrl = url;
      });
      cy.then(() => cy.visit(dynamicUrl));
      cy.get('#username').should('be.visible');
      cy.get("#username").type(email);
      cy.contains("Continue").click();
     cy.contains('Continue logging in');
      cy.get("#password").should("be.visible").click().type(password);
      cy.get(".ca0df71c7 > .ccfd14389").click();
    }
  );
});

Cypress.Commands.add('getPetsByStatus', (statuses: string[]) => {
  const apiUrl = `https://petstore.swagger.io/v2/pet/findByStatus?${statuses.map(status => `status=${status}`).join('&')}`;
  cy.request('GET', apiUrl).then((response) => {
    return response;
});
});

Cypress.Commands.add('addPetToStore', (petData) => {
  return cy.request({
    method: 'POST',
    url: 'https://petstore.swagger.io/v2/pet',
    body: petData,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response) => {
    return response;
  });
});


declare global {
  namespace Cypress {
    interface Chainable {
      addPetToStore(petData: { id?: number; name: string; status: string }): Chainable<Response<any>>;
      getPetsByStatus(status:string[]):Chainable<Response<any>>;
      loginViaUi(email: string, password: string): Chainable<void>;
    }
  }
}


export {};
