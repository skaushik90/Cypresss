import { LoginPage } from "./pages/login_page";

const loginPage = new LoginPage();

describe("All login tests", () => {
  beforeEach(function () {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });
  it("Page Object Model Demo 1", function () {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-userdropdown-tab").click();
  });

  it("Page Object Model Demo 2", function () {
    loginPage.enterUsername("Admin");
    loginPage.enterPassword("admin");
    loginPage.clickLogin();
  });
});
