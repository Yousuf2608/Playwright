import { Question_1 } from '../pageObjects/Question_1.js';

export default class LoginPage {
    constructor(page) {
        this.page = page;
        this.question_1 = new Question_1(page);
    }

    async enterUsername(username) {
        await this.question_1.username.fill(username);
    }

    async enterPassword(password) {
        await this.question_1.password.fill(password);
    }

    async clickLoginButton() {
        await this.question_1.enterLoginButton.click();
    }
}