const URL = "http://mobile.planloader.com/";

const loginPage_Logo = ".loader-logo";
const Email_Field = "input[type=email]";
const Password_Field = "input[type=password]";
const Login_Button = "button[type=button]";
const HomePage_Logo = "div .avatar-img";

class loginPage {
  static visit() {
    cy.visit(URL);
    cy.contains("Login to your account");
    cy.url().should("include", "mobile.planloader.com/");
  }

  static lodarLogoOnLoginPage() {
    cy.get(loginPage_Logo).should("be.visible");
  }

  static forgotPasswordLink() {
    cy.contains("Forgot your password").then(($button) => {
      if ($button.is(":visible")) {
        
        console.log("Error", "err.message");
        cy.on("uncaught:exception", (err, runnable) => {
          expect(err.message).to.include("voide is not defined");
          return false;
        });

        //cy.contains("Forgot your password").click();
          cy.get("u[type=button]").click();
          cy.url().should("include", "/forget-password");
          cy.get("h2").contains("Reset your account password ").should("exist");
          cy.go("back");
      }
    });
  }

  static signupLink() {
    cy.contains("Don't have an account? ").should("be.visible");
    cy.get("a[href='/signup']").click()
    cy.get("h2").contains("Create a new account ").should("be.visible");
  } 

  static signInLink() {
    cy.contains("Already have an account? ").should("be.visible");
    cy.get("a[href='/login']").click();
    cy.get("h2").contains("Login to your account").should("be.visible");
  }

  static fillEmailField(string) {
    cy.get(Email_Field).type(string).should("have.value", string);
  }

  static fillPasswordField(string) {
    cy.get(Password_Field).type(string).should("have.value", string);
  }

  static clickLoginButton() {
    cy.get(Login_Button).click();
  }

  static invalidDataFieldErrorMessage(string) {
    cy.contains(string).should("be.visible");
  }

  static checkingHomePageLogo() {
    cy.get(HomePage_Logo).first().click();
  }

  static checkingHomePageLogo() {
    cy.get(HomePage_Logo).first().click();
  }

  static signout() {
    cy.contains("Logout").click();
    cy.url().should("includes", "http://mobile.planloader.com/login");
  }
}
export default loginPage;
