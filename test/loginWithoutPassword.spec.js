import { test, expect } from "@playwright/test";
import { LoginPage } from "../src/LoginPage";

test("User is not able to login without Password", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();
  await loginPage.fillUsernameField("tomsmith");
  await loginPage.clickLoginButton();
  await loginPage.assertErrorMessage("Your password is invalid!");
});
