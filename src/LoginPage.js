import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator(".flash.error");
    this.successMessage = page.locator(".flash.success");
  }

  async open() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }
  async fillUsernameField(username) {
    await this.usernameField.fill(username);
  }
  async fillPasswordField(password) {
    await this.passwordField.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async assertErrorMessage(expectedText) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedText);
  }
  async assertSuccessMessage(expectedText) {
    await expect(this.successMessage).toBeVisible();
    await expect(this.successMessage).toContainText(expectedText);
  }
}
