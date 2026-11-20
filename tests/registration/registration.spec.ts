
import { test, expect } from "../fixtures/registration-fixtures";

test("Registration using Excel test data", async ({
    registrationPage,
    registrationData
}) => {

    const data = registrationData[0];

    await registrationPage.navigate();

    await registrationPage.enterFirstName(data.FirstName);
    await registrationPage.enterLastName(data.LastName);
    await registrationPage.enterEmail(data.Email);
    await registrationPage.enterTelephone(String(data.Telephone));
    await registrationPage.selectGender(data.Gender);


    // Convert DOB to string
    await registrationPage.enterDOB(data.DOB);

    await registrationPage.selectCountry(data.Country);
    await registrationPage.selectInterest();
    await registrationPage.enterPassword(data.Password);
    await registrationPage.enterConfirmPassword(data.ConfirmPassword);

    await registrationPage.clickRegister();

});
