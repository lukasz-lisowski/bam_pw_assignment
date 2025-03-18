import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';
import { LeadershipPage } from '../pages/leadership.page';

type Fixtures = {
  landingPage: LandingPage;
  leadershipPage: LeadershipPage;
};

export const test = base.extend<Fixtures>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  leadershipPage: async ({ page }, use) => {
    await use(new LeadershipPage(page));
  },
});

export { expect } from '@playwright/test';
