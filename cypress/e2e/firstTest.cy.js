it("Google Search", function () {
  cy.visit("https://www.google.com/");
  cy.get("#APjFqb", { timeout: 5000 }).type("Kaushik Srinivasan {Enter}");
  // Global timeout in cypress.config.js
  // Another possible wait is:
  // cy.wait(1000)
  //   cy.contains("Google Search").click();
});
