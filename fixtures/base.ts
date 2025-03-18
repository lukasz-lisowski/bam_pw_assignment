import { test as base } from '@playwright/test';
import { LandingPage } from '../pages/landing.page';

type Fixtures = {
  landingPage: LandingPage;
};

export const test = base.extend<Fixtures>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
});

export { expect } from '@playwright/test';
