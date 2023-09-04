it("Assertions Demo", function () {
  cy.visit("https://example.cypress.io/");
  cy.contains("get").click();
  // One can use should or and for subsequent implicit assertions
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn")
    .and("be.visible")
    .should("be.enabled");

  //   cy.get("#APjFqb", { timeout: 5000 }).type("Kaushik Srinivasan {Enter}");
});
