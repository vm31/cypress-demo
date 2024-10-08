describe("Home Page tests", () => {

    beforeEach(function() {
      cy.fixture('api').as('api');
    });
  
    it('get devices', function() {
      const { api } = this.api;
      cy.iGet(api.url).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body).to.include('http://10.0.0.225:8080')
      })
    });
  });
  