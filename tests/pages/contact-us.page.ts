import { Page } from '@playwright/test';
import { ContactUsForm } from '../types/types';

const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

const data_positive: ContactUsForm[] = [
  {
    firstName: '',
    lastName: '',
    emailAddress: '',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'info',
  },
];

const data_negative: ContactUsForm[] = [
  {
    topic: 'info',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    emailAddress: '',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'pr',
  },
];

export class ContactUsPage {
  private headerSection = this.page.getByRole('heading', { name: 'Get in touch' });
  private firstNameField = this.page.getByRole('textbox', { name: 'First Name*' });
  private lastNameField = this.page.getByRole('textbox', { name: 'Last Name*' });
  private companyField = this.page.getByRole('textbox', { name: 'Company/School Name' });
  private emailAddressField = this.page.getByRole('textbox', { name: 'E-mail Address*' });
  private phoneNumberField = this.page.getByRole('textbox', { name: 'Phone Number' });
  private topicDropdown = this.page.getByLabel('Topic');

  constructor(protected page: Page) {}

  async verifyPageLoaded(): Promise<void> {
    await this.headerSection.isVisible(ELEMENT_TIMEOUT);
  }

  async fillOutForm(data: ContactUsForm): Promise<void> {
    await this.firstNameField.fill(data.firstName);
    await this.lastNameField.fill(data.lastName);
    await this.companyField.fill(data.company);
    await this.emailAddressField.fill(data.emailAddress);
    await this.phoneNumberField.fill(data.phoneNumber);
    await this.topicDropdown.selectOption({ label: data.topic });
  }
}
