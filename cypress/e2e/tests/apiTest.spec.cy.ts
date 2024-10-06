describe("Home Page tests", () => {

    // Load fixture before each test
    beforeEach(function() {
      cy.fixture('api').as('api');  // Load 'api' fixture and alias it as 'api'
    });
  
    // Test case using the loaded fixture data
    it.only('my backend cypress test', function() {
      const { api } = this.api;  // Access 'api' data from fixture
      cy.firstBackendCall(api.url);  // Call your custom command and pass 'api' data
    });
  });
  