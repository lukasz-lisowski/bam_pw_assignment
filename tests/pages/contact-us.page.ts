import { expect, Locator, Page } from '@playwright/test';
import { ContactUsForm } from '../types/types';

export const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class ContactUsPage {
  readonly headerSection: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly companyField: Locator;
  readonly emailAddressField: Locator;
  readonly phoneNumberField: Locator;
  readonly topicDropdown: Locator;
  readonly submitButton: Locator;
  readonly errorMessage: Locator;

  constructor(protected page: Page) {
    this.headerSection = this.page.getByRole('heading', { name: 'Get in touch' });
    this.firstNameField = this.page.getByRole('textbox', { name: 'First Name*' });
    this.lastNameField = this.page.getByRole('textbox', { name: 'Last Name*' });
    this.companyField = this.page.getByRole('textbox', { name: 'Company/School Name' });
    this.emailAddressField = this.page.getByRole('textbox', { name: 'E-mail Address*' });
    this.phoneNumberField = this.page.getByRole('textbox', { name: 'Phone Number' });
    this.topicDropdown = this.page.getByLabel('Topic');
    this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    this.errorMessage = this.page
      .locator('div')
      .filter({ hasText: /^.*.This field is required$/ })
      .getByRole('paragraph');
  }

  async verifyPageLoaded(): Promise<void> {
    await this.headerSection.isVisible(ELEMENT_TIMEOUT);
    await this.firstNameField.isVisible(ELEMENT_TIMEOUT);
  }

  async fillOutForm(data: ContactUsForm): Promise<void> {
    await this.firstNameField.isVisible(ELEMENT_TIMEOUT);
    await this.firstNameField.fill(data.firstName);
    await this.lastNameField.fill(data.lastName);
    await this.companyField.fill(data.company);
    await this.emailAddressField.fill(data.emailAddress);
    await this.phoneNumberField.fill(data.phoneNumber);
    await this.topicDropdown.click();
    await this.topicDropdown.selectOption(data.topic);
  }

  async submitForm(): Promise<void> {
    await this.submitButton.click();
  }

  async errorMessageVisible(): Promise<void> {
    expect((await this.errorMessage.count()) > 0).toBeTruthy();
    expect((await this.errorMessage.count()) > 0).toBeTruthy();
  }

  async refreshPage(): Promise<void> {
    await this.page.reload();
  }

  async emailFieldValid(): Promise<boolean> {
    const emailValidity = await this.emailAddressField.evaluate((el: HTMLInputElement) => {
      return {
        valid: el.validity.valid,
        valueMissing: el.validity.valueMissing,
        typeMismatch: el.validity.typeMismatch,
      };
    });

    return emailValidity.valid;
  }
}
