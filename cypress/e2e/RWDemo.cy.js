/// <reference types = "cypress"/>

describe("template spec", () => {
  beforeEach(function () {
    cy.fixture("example.json").as("test_data");
  });

  it("Read files using Fixtures", function () {
    cy.fixture("example.json").then((data) => {
      cy.log(data.name);
      cy.log(data.email);
      cy.log(data.body);
    });
  });

  it("Read files using Fixtures with before block ", function () {
    cy.log(this.test_data.name);
    cy.log(this.test_data.email);
    cy.log(this.test_data.body);
  });

  it("Read file demo ", function () {
    cy.readFile("./cypress/fixtures/example.json").then((data) => {
      cy.log(data.name);
      cy.log(data.email);
      cy.log(data.body);
    });
  });

  it("Write file demo ", function () {
    cy.writeFile("sample.txt", "Hello. This is a sample test file\n");
    cy.writeFile("sample.txt", "I am appending", { flag: "a+" });
  });
});
