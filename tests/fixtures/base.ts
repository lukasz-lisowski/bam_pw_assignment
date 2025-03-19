import { test as base } from '@playwright/test';
import { ContactUsPage } from '../pages/contact-us.page';
import { LandingPage } from '../pages/landing.page';
import { LeadershipPage } from '../pages/leadership.page';

type Fixtures = {
  landingPage: LandingPage;
  leadershipPage: LeadershipPage;
  contactUsPage: ContactUsPage;
};

export const test = base.extend<Fixtures>({
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  leadershipPage: async ({ page }, use) => {
    await use(new LeadershipPage(page));
  },
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
});

export { expect } from '@playwright/test';
