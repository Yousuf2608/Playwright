import { Question_2 } from "../pageObjects/Question_2.js";

export  default class PurchaseJourney {
    constructor(page) {
        this.page = page;
        this.question_2 = new Question_2(page);
    }
    async enterUserName(username) {
        await this.question_2.username.fill(username);
    }

    async enterPassword(password) {
        await this.question_2.password.fill(password);
        //await this.page.pause(2000);
    }

    async clickLoginButton() {
        await this.question_2.enterLoginButton.click();
    }

    async clickHamBurgerMenu() {
        await this.question_2.hamBurgerMenu.click();
    }

    async clickResetAppState() {
        await this.question_2.resetAppState.click();
    }

    async clickBack() {
        await this.question_2.back.click();
    }

    async addToCart1() {
        await this.question_2.addToCart1.click();
    }

    async addToCart2() {
        await this.question_2.addToCart2.click();
    }

    async addToCart3() {
        await this.question_2.addToCart3.click();
    }   

    async clickAddToCartIcon() {
        await this.question_2.addToCartIcon.click();
    }

    async clickCheckout() {
        await this.question_2.checkout.click();
    }

    async enterFirstName(firstName) {
        await this.question_2.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.question_2.lastName.fill(lastName);
    }   

    async enterPostalCode(postalCode) {
        await this.question_2.postalCode.fill(postalCode);
    }

    async clickContinueButton() {
        await this.question_2.continueButton.click();
    }

    async clickFinishButton() {
        await this.question_2.finishButton.click();
    }

    async clickBackHomeButton() {
        await this.question_2.backHomeButton.click();
    }

    async clickLogout() {
        await this.question_2.logout.click();
    }

}
