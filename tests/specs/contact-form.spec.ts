import { expect, test } from '../fixtures/base';
import { ContactUsForm } from '../types/types';

const data_wrong_email: ContactUsForm = {
  firstName: 'Jane',
  lastName: 'Doe',
  emailAddress: 'testemail.com',
  company: 'Test Company',
  phoneNumber: '123-456-7890',
  topic: 'pr',
  message: 'This is a test message',
};

const data_negative: ContactUsForm[] = [
  {
    firstName: '',
    lastName: 'Doe',
    emailAddress: 'test@email.com',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'pr',
    message: 'This is a test message',
  },
  {
    firstName: 'Jane',
    lastName: '',
    emailAddress: 'test@email.com',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'investor_relations',
    message: 'This is a test message',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    emailAddress: 'test@email.com',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'investor_relations',
    message: 'This is a test message',
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    emailAddress: '',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'investor_relations',
    message: '',
  },
];

test.describe('contact us form', () => {
  test('should be able to fill in Contact Us form page', async ({ landingPage, contactUsPage }) => {
    await landingPage.open();

    await test.step('landing page', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('navigate to Contact Us', async () => {
      await landingPage.navigateToContactUsPage();
    });

    // In order to not spam the contact form, we will only test the negative cases
    // and the wrong email format case
    // no positive scenario is tested here

    await test.step('should fail with wrong email format', async () => {
      await contactUsPage.verifyPageLoaded();

      await contactUsPage.fillOutForm(data_wrong_email);
      await contactUsPage.submitForm();

      expect(await contactUsPage.emailFieldValid()).toBeFalsy();

      await contactUsPage.refreshPage();
    });

    await test.step('should fail without required fields', async () => {
      await contactUsPage.verifyPageLoaded();

      for (const data of data_negative) {
        await contactUsPage.fillOutForm(data);
        await contactUsPage.submitForm();

        await contactUsPage.errorMessageVisible();

        await contactUsPage.refreshPage();
      }
    });
  });
});
