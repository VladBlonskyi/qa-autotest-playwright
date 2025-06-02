import { test } from "@playwright/test";
import { LoginPage } from "../src/LoginPage";

test("User is able to login with Valid Data", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.open();
  await loginPage.fillUsernameField("tomsmith");
  await loginPage.fillPasswordField("SuperSecretPassword!");
  await loginPage.clickLoginButton();
  await loginPage.assertSuccessMessage("You logged into a secure area!");
});
