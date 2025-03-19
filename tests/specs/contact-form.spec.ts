import { expect, test } from '../fixtures/base';
import { ContactUsForm } from '../types/types';

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
    firstName: '',
    lastName: 'Doe',
    emailAddress: '',
    company: 'Test Company',
    phoneNumber: '123-456-7890',
    topic: 'pr',
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

test.describe('contact us form', () => {
  test('should find founders on Leadership page', async ({ landingPage, contactUsPage }) => {
    test.slow();
    await landingPage.open();

    await test.step('landing page', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('navigate to Contact Us', async () => {
      await landingPage.navigateToContactUsPage();
    });

    await test.step('should fail without required fields', async () => {
      await contactUsPage.verifyPageLoaded();

      for (const data of data_negative) {
        await contactUsPage.fillOutForm(data);
        await contactUsPage.submitForm();
        // expect(contactUsPage.errorMessageVisible()).toBeTruthy();
      }
    });
  });
});
