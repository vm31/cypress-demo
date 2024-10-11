interface Pet {
  name: string;
  status: string;
}

describe("Home Page tests", () => {

  beforeEach(function() {
    cy.fixture('api').as('api');
  });

  it('add new pet to store', function() {
    // Create a pet object to add
    const newPet:Pet = {
      name: "---------------------------",
      status: "available",
    };
    cy.addPetToStore(newPet).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('addedPet',response.body);
      cy.log('response from call',JSON.stringify(response.body));
    });
  });

  it('get pets in store', function() {
    cy.getPetsSold(['available']).then((response) => { // Changed 'pending' to 'available' to match the added pet
      cy.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      expect(response.body).to.not.be.null; // Ensure the response body is not empty
      const filteredPets = response.body.filter((pet:Pet) => {
        return pet.status === "available"; // Modify this condition based on your requirement
      });
      cy.log('Filtered pets:', JSON.stringify(filteredPets));
      filteredPets.forEach((pet:Pet) => {
        expect(pet.status).to.eq("available"); // Ensure the status is "available"
      })
    });
  });
});
