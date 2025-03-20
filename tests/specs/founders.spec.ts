import { test } from '../fixtures/base';

test.describe('founders page', () => {
  test('should find founders on Leadership page', async ({ landingPage, leadershipPage }) => {
    await landingPage.open();

    await test.step('landing page hero section', async () => {
      await landingPage.dismissCookieBanner();

      await landingPage.shouldHaveHeroSection();
    });

    await test.step('should navigate to Leadership page', async () => {
      await landingPage.navigateToLeadershipPage();
    });

    await test.step('should find founders', async () => {
      await leadershipPage.verifyPageLoaded();

      await leadershipPage.verifyFoundersVisible();
    });
  });
});
