describe("Home Page tests", () => {

    // Load fixture before each test
    beforeEach(function() {
      cy.fixture('api').as('api');
    });
  
    // Test case using the loaded fixture data
    it.only('my backend cypress test', function() {
      const { api } = this.api;
      cy.firstBackendCall(api.url);
    });
  });
  