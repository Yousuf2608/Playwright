import {test, expect} from "@playwright/test";
import PurchaseJourney2 from "../pages/purchase_Journey2.js";

test.describe('Verify the purchase_2 journey', () => {
    test('Verify the purchase_2 journey with performance_glitch_user', async ({page}) => {
        const purchase_Journey2 = new PurchaseJourney2(page);

        await page.goto('https://www.saucedemo.com/');
        await purchase_Journey2.enterUserName('performance_glitch_user');
        await purchase_Journey2.enterPassword('secret_sauce');
        await purchase_Journey2.clickLoginButton();
        await purchase_Journey2.clickHamBurgerMenu();
        await purchase_Journey2.clickResetAppState();
        await purchase_Journey2.clickBack();
        await purchase_Journey2.filter();
        await purchase_Journey2.addProduct();
        await purchase_Journey2.clickAddToCartIcon();
        await purchase_Journey2.clickCheckout();
        await purchase_Journey2.enterFirstName('Yousuf');
        await purchase_Journey2.enterLastName('Khan');
        await purchase_Journey2.enterPostalCode('1230');
        await purchase_Journey2.clickContinueButton();

        await expect (page.locator("//div[@data-test='item-quantity']")).toHaveText('1');
        await expect (page.locator("//div[@data-test='inventory-item-name']")).toHaveText('Test.allTheThings() T-Shirt (Red)');
        await expect (page.locator("//div[@data-test='inventory-item-price']")).toHaveText('$15.99');
        await expect (page.locator("//div[@class='summary_subtotal_label']")).toHaveText('Item total: $15.99');
        await expect (page.locator("//div[@class='summary_tax_label']")).toHaveText('Tax: $1.28');
        await expect (page.locator("//div[@class='summary_total_label']")).toHaveText('Total: $17.27');

        await purchase_Journey2.clickFinishButton();
        await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!');
        await purchase_Journey2.clickBackHomeButton();
        await purchase_Journey2.clickHamBurgerMenu();
        await purchase_Journey2.clickResetAppState();
        await purchase_Journey2.clickLogout();


    });

});

