
import { test as base, expect } from "@playwright/test";
import { RegistrationPages } from "../registration/registrationpage";
import * as XLSX from "xlsx";
import path from "path";

// Excel data structure
interface RegistrationData {
    FirstName: string;
    LastName: string;
    Email: string;
    Telephone: string;
    Gender: string;
    DOB: string;
    Country: string;
    Password: string;
    ConfirmPassword: string;
}

// Fixture structure
type RegistrationFixtures = {
    registrationPage: RegistrationPages;
    registrationData: RegistrationData[];
};

// Create custom fixture
export const test = base.extend<RegistrationFixtures>({

    // POM fixture
    registrationPage: async ({ page }, use) => {
        const registration = new RegistrationPages(page);
        await use(registration);
    },

    // Excel data fixture
    registrationData: async ({}, use) => {

        const filePath = path.resolve(
            __dirname,
            "../../test-data/registration-data.xlsx"
        );

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets["RegistrationData"];

        if (!worksheet) {
            throw new Error("RegistrationData sheet not found");
        }

        const data: RegistrationData[] =
            XLSX.utils.sheet_to_json(worksheet, { defval: "", raw: false});

        await use(data);
    }
});

export { expect };
