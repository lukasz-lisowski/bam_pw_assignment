import { expect, test } from '../fixtures/base';

test.describe('locations page', () => {
  test('should find all office locations on Locations page', async ({ landingPage, locationsPage }) => {
    await landingPage.open();

    await test.step('landing page hero section', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('should navigate to Locations page', async () => {
      await landingPage.navigateToLocationsPage();
    });

    await test.step('should find locations', async () => {
      expect(locationsPage.verifyPageLoaded()).toBeTruthy();

      await locationsPage.shouldHaveAllLocations();
    });
  });
});
