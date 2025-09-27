import { Question_3 } from '../pageObjects/Question_3.js';

export default class PurchaseJourney2 {
    constructor(page){
        this.page = page;
        this.question_3 = new Question_3(page);
    }

   async enterUserName(username) {
        await this.question_3.username.fill(username);
    }

    async enterPassword(password) {
        await this.question_3.password.fill(password);
        //await this.page.pause(2000);
    }

    async clickLoginButton() {
        await this.question_3.enterLoginButton.click();
    }

    async clickHamBurgerMenu() {
        await this.question_3.hamBurgerMenu.click();
    }

    async clickResetAppState() {
        await this.question_3.resetAppState.click();
    }

    async clickBack() {
        await this.question_3.back.click();
    }

    async filter() {
        await this.question_3.filterButton.selectOption('za');
    }


    async addProduct() {
        await this.question_3.addProduct.click();
    }

    async clickAddToCartIcon() {
        await this.question_3.addToCartIcon.click();
    }

     async clickCheckout() {
        await this.question_3.checkout.click();
    }

    async enterFirstName(firstName) {
        await this.question_3.firstName.fill(firstName);
    }

    async enterLastName(lastName) {
        await this.question_3.lastName.fill(lastName);
    }   

    async enterPostalCode(postalCode) {
        await this.question_3.postalCode.fill(postalCode);
    }

    async clickContinueButton() {
        await this.question_3.continueButton.click();
    }

    async clickFinishButton() {
        await this.question_3.finishButton.click();
    }

    async clickBackHomeButton() {
        await this.question_3.backHomeButton.click();
    }

    async clickLogout() {
        await this.question_3.logout.click();
    }

}