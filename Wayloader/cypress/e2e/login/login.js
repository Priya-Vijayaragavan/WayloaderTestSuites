import {
  Given,
  And,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "./loginPage";

Given("Visit wayloader login page", () => {
  loginPage.visit();
});

And("Check for wayloader logo", () => {
  loginPage.lodarLogoOnLoginPage();
});

And("Checking for forgot password link", () => {
  loginPage.forgotPasswordLink();
});

And("Don't have account an account? with signup link", () => {
  loginPage.signupLink();
});

Then("Alreay have an account? with signin link", () => {
  loginPage.signInLink();
});

When("Type into email field {string}", (string) => {
  loginPage.fillEmailField(string);
});

And("Type into password field {string}", (string) => {
  loginPage.fillPasswordField(string);
});

And("Login to the account", () => {
  loginPage.clickLoginButton();
});

And("Checking for home page logo", () => {
  loginPage.checkingHomePageLogo();
});

Then("Signing out", () => {
  loginPage.signout();
});

Then("Checking for Error message {string}", (string) => {
  loginPage.invalidDataFieldErrorMessage(string);
});

