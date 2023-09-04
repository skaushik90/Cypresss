import * as resources from "../resources/tags.json"; //assert { type: "json" };

export class LoginPage {
  enterUsername(userName) {
    cy.get(resources.userName).type(userName);
  }

  enterPassword(password) {
    cy.get(resources.passWord).type(password);
  }

  clickLogin() {
    cy.get(resources.login_button).click();
  }
}
