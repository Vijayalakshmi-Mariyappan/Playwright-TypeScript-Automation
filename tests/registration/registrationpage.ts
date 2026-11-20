import { Page } from "@playwright/test";
export class RegistrationPages {
    readonly page: Page;
    constructor(page: Page){
    this.page = page;
    }
    //open website
    async navigate() {
        await this.page.goto('https://shop.qaautomationlabs.com');
        await this.page.getByRole('link', { name: 'Register Here' }).click();
    }
    //enter first name
    async enterFirstName(firstName: string) {
        await this.page.getByPlaceholder("First Name").fill(firstName);
    }
    //enter last name
    async enterLastName(lastName: string) {
        await this.page.getByPlaceholder("Last Name").fill(lastName);
    }
    //enter email
    async enterEmail(Email: string) {
        await this.page.getByTitle("E-Mail").fill(Email);
    }
    //enter telephone number
    async enterTelephone(Telephone: string) {
        await this.page.getByTestId("register-phone-input").fill(Telephone);
    }
    //select gender
    async selectGender(gender: string) {
        await this.page.locator(`input[name="gender"][value="${gender}"]`).check();
    }
    //dob
    async enterDOB(DOB: string) {
        const date = new Date(DOB);
        const formattedDOB = date.toISOString().split("T")[0];
        await this.page.getByLabel("Date of Birth").fill(formattedDOB);
    }
    //select country
    async selectCountry(country: string) { 
        await this.page.getByTestId("register-country-select").selectOption( { 
            label: country 
        } );
    }
    //select interest
    async selectInterest() {
        const Interest = await this.page.locator('//input[@type="checkbox"]').all();
        for (const interests of Interest) {
            await interests.check();
        }
    }
    //enter password
    async enterPassword(Password: string) {
        await this.page.getByTestId("register-password-input").fill(Password);
    }
    //enter confirm password
    async enterConfirmPassword(ConfirmPassword: string) {
        await this.page.getByTestId("register-confirm-password-input").fill(ConfirmPassword);
    }
    //click register
    async clickRegister() {
        await this.page.getByRole("button", {
            name: "Register"
        }).click();
    }
}

