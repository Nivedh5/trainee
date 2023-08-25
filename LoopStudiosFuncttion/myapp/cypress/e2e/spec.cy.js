describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
   
  //positive

  it('profiles check', () => {

    cy.get('#profile').click();
    
    cy.get('[id*="username"]').should("exist");

    cy.get('[id*="password"]').should("exist");

    cy.get("#username").should('have.value','');

    cy.get("#password").should('have.value',''); 
  })

  it("Type-The-Search-Field", () => {
  
    cy.get("#profile").click();
    
    cy.get("#username").type('nivedh');

    cy.get('#password').type('nivedh');

    cy.get('#login-button').click();

    cy.get("#Route").click();
     
  });

it("switching to about via actions",()=>{
  cy.get("#profile").click();
    
  cy.get("#username").type('nivedh');

  cy.get('#password').type('nivedh');

  cy.get('#login-button').click();

  cy.get("#Route").click();
   
  
  cy.get('[class*="about-input"]').should('exist')

  cy.get(".about-input").should('have.value','')
})
it("checking inputs",()=>{
  cy.get("#profile").click();
    
  cy.get("#username").type('nivedh');

  cy.get('#password').type('nivedh');

  cy.get('#login-button').click();

  cy.get("#Route").click();

  cy.get(".about-input").type('products');

  cy.get("#save").click()

  cy.get("#edit").click()

  cy.get("#delete").click()

  cy.get("#save").click()


})
it("logout",()=>{
  cy.get("#profile").click();
    
  cy.get("#username").type('nivedh');

  cy.get('#password').type('nivedh');

  cy.get('#login-button').click();

  cy.get("#Route").click();

  cy.get("#logout").click()
})


//negative 



  it('profiles check - negative', () => {

    cy.get('#profile').click();
    
    cy.get('[id*="username"]').should("exist");

    cy.get('[id*="password"]').should("exist");

    cy.get("#username").should('not.have.value','n');

    cy.get("#password").should('not.have.value','n'); 
});

it("Type-The-Search-Field - Negative", () => {
  
  cy.get("#profile").click();
  
  cy.get("#username").type('incorrectUsername'); 

  cy.get('#password').type('incorrectPassword'); 

  cy.get('#login-button').click();
  
  
});

it("switching to about via actions - Negative", () => {
  cy.get("#profile").click();
    
  cy.get("#username").type('nivedh');

  cy.get('#password').type('nivedh');

  cy.get('#login-button').click();

  cy.get("#Route").click();

  cy.get(".about-input").should('not.have.value','niv')

  cy.get('[class*="about-input1"]').should('not.exist');
});

it("checking inputs - Negative", () => {
  cy.get("#profile").click();
    
  cy.get("#username").type('nivedh');

  cy.get('#password').type('nivedh');

  cy.get('#login-button').click();

  cy.get("#Route").click();

  cy.get(".about-input").type('products');

  cy.get("saved").should("not.exist");

  cy.get("#logout").click()

});




})

