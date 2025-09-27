import { test, expect } from "@playwright/test";
import LoginPage from "../pages/login.js";

test.describe("Verify the login", () => {
    test("Verify the login with locked_out_user", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto("https://www.saucedemo.com/");
        await loginPage.enterUsername("locked_out_user");
        await loginPage.enterPassword("secret_sauce");
        await loginPage.clickLoginButton();

        await expect(page.locator("[data-test='error']")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
        await page.waitForTimeout(2000);
    });
});