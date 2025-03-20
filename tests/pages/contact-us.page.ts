import { Page } from '@playwright/test';
import { ContactUsForm } from '../types/types';

export const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class ContactUsPage {
  private headerSection = this.page.getByRole('heading', { name: 'Get in touch' });
  private firstNameField = this.page.getByRole('textbox', { name: 'First Name*' });
  private lastNameField = this.page.getByRole('textbox', { name: 'Last Name*' });
  private companyField = this.page.getByRole('textbox', { name: 'Company/School Name' });
  private emailAddressField = this.page.getByRole('textbox', { name: 'E-mail Address*' });
  private phoneNumberField = this.page.getByRole('textbox', { name: 'Phone Number' });
  private topicDropdown = this.page.getByLabel('Topic');
  private submitButton = this.page.getByRole('button', { name: 'Submit' });
  private errorMessage = this.page
    .locator('div')
    .filter({ hasText: /^.*.This field is required$/ })
    .getByRole('paragraph');

  constructor(protected page: Page) {}

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

  async errorMessageVisible(): Promise<boolean> {
    return (await this.errorMessage.count()) > 0;
  }

  async refreshPage(): Promise<void> {
    await this.page.reload();
  }
}
