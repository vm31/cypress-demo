interface Pet {
  name: string;
  status: string;
}

describe("Home Page tests", () => {

  beforeEach(function() {
    cy.fixture('api').as('api');
  });

  it('add new pet to store', function() {
    const newPet:Pet = {
      name: "------I am a test pet--------",
      status: "available",
    };
    cy.addPetToStore(newPet).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('addedPet',response.body);
      cy.log('response from call',JSON.stringify(response.body));
    });
  });

  it('get pets in store', function() {
    const addedPet = Cypress.env('addedPet');
    expect(addedPet).to.not.to.be.null;
    cy.log('Added pet is: ',JSON.stringify(addedPet));
    cy.getPetsByStatus(['available']).then((response) => {
    console.log(JSON.stringify(response.body));
      expect(response.status).to.eq(200);
      const totalAvailablePets = response.body.filter((pet:Pet) => pet.status === "available");
      const addedPetIsAvailable = totalAvailablePets.some((pet:Pet)=> pet.name === addedPet.name);
      expect(addedPetIsAvailable).to.be.true;
    });
  });
});
