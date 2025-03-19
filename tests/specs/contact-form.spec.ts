import { test } from '../fixtures/base';

test.describe('contact us form', () => {
  test('should find founders on Leadership page', async ({ landingPage }) => {
    test.slow();
    await landingPage.open();

    await test.step('landing page', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('navigate to Contact Us', async () => {
      await landingPage.navigateToContactUsPage();
    });
  });
});
