// Define a custom type for the response body (optional)
type BackendData = {
  data: {
    id: number;
    name: string;
    // other fields in the response
  };
};

describe('Backend Data Test', () => {
  it('should successfully fetch backend data and assert status', () => {
    cy.firstBackendCall('').then((response: Cypress.Response<BackendData>) => {
      // Perform assertions on the response
      expect(response.status).to.eq(200);  // Assert the response status
      expect(response.body).to.have.property('data');  // Assert response body content
      console.log('Response body is:',response.body)
    });
  });
});
