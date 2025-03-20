import { expect, test } from '../fixtures/base';

test.describe('business infrastructure page', () => {
  test('should find founders on Leadership page', async ({ landingPage, businessInfraPage }) => {
    await landingPage.open();

    await test.step('landing page hero section', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('should navigate to Business Infrastructure page', async () => {
      await landingPage.navigateToBusinessInfraPage();
    });

    await test.step('should see whole Business Infrastructure grid', async () => {
      expect(businessInfraPage.verifyPageLoaded()).toBeTruthy();

      await businessInfraPage.shouldHaveEholeInfrastructure();
    });
  });
});
