import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/LoginPage";

test("User is not able to login without Username", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillPasswordField("SuperSecretPassword!");
  await loginPage.clickLoginButton();
  await loginPage.assertErrorMessage("Your username is invalid!");
});
