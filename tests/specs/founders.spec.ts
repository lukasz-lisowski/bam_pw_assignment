import { expect, test } from '../../fixtures/base';

test.describe('founders page', () => {
  test('should find founders on Leadership page', async ({ landingPage }) => {
    await landingPage.open();

    // test.step('landing page hero section', async () => {
    //   await landingPage.shouldHaveHeroSection();
    // });

    test.step('should navigate to Leadership page', async () => {
      await landingPage.navigateToLeadershipPage();
    });
  });
});
