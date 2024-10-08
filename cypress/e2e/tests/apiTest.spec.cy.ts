describe("Home Page tests", () => {

    beforeEach(function() {
      cy.fixture('api').as('api');
    });
  
    it.only('my backend cypress test', function() {
      const { api } = this.api;
      cy.firstBackendCall(api.url);
    });
  });
  