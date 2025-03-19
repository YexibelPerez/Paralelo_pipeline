///<reference types="cypress"/>

describe("Bienvenido al curso de cypress sección 1", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });

  it("Mi primer test => Hola mundo", () => {
    cy.log("Hola mundo!");
    cy.wait(6000);
  });

  it("Segundo test -> campo name", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").type("Yexibel");
    cy.wait(6000);
  });

  it("Tercer test -> campo name", () => {
    cy.visit("https://demoqa.com/text-box");

    cy.get("#userName").type("Yexibel");
    cy.wait(6000);
  });
}); // Cierre del describe
