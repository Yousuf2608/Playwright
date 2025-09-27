import {test, expect} from '@playwright/test';
import  PurchaseJourney  from '../pages/purchase_Journey.js';


test.describe('Verify the Purchase Journey', () => {
    test('Verify the Purchase Journey with standard_user', async ({page}) => {
        const purchaseJourney = new PurchaseJourney(page);
        await page.goto('https://www.saucedemo.com/');
        
        await purchaseJourney.enterUserName('standard_user');
        await purchaseJourney.enterPassword('secret_sauce');
        await purchaseJourney.clickLoginButton();
        await purchaseJourney.clickHamBurgerMenu();
        await purchaseJourney.clickResetAppState();
        await purchaseJourney.clickBack();
        await purchaseJourney.addToCart1();     
        await purchaseJourney.addToCart2();
        await purchaseJourney.addToCart3();
        await purchaseJourney.clickAddToCartIcon();
        await purchaseJourney.clickCheckout();
        await purchaseJourney.enterFirstName('Yousuf');
        await purchaseJourney.enterLastName('Khan');
        await purchaseJourney.enterPostalCode('1230');
        await purchaseJourney.clickContinueButton();

        

        await expect (page.locator("//div[@data-test='inventory-item-name']")).toHaveText(['Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Bike Light']);
        await expect (page.locator("//div[@data-test='inventory-item-price']")).toHaveText(['$29.99', '$15.99', '$9.99']);

       
        await expect (page.locator("//div[@class='summary_subtotal_label']")).toHaveText('Item total: $55.97');
        await expect (page.locator("//div[@class='summary_tax_label']")).toHaveText('Tax: $4.48');
        await expect (page.locator("//div[@class='summary_total_label']")).toHaveText('Total: $60.45');
        
        await purchaseJourney.clickFinishButton();
        await expect(page.locator("//h2[@class='complete-header']")).toHaveText('Thank you for your order!');
        
        await purchaseJourney.clickBackHomeButton();
        await purchaseJourney.clickHamBurgerMenu();
        await purchaseJourney.clickResetAppState();
        await purchaseJourney.clickLogout();

    });
});