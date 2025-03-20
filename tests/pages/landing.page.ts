import { expect, Locator, Page } from '@playwright/test';
import { landing_page_aria_snapshot } from '../fixtures/snapshots/landing-page';

const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class LandingPage {
  readonly headerNavigation: Locator;
  readonly main: Locator;
  readonly aboutUs: Locator;
  readonly leadershipLink: Locator;
  readonly locationsLink: Locator;
  readonly cookieConsentBanner: Locator;
  readonly contactUs: Locator;

  constructor(protected page: Page) {
    this.headerNavigation = this.page.getByRole('banner');
    this.main = this.page.getByRole('main');
    this.aboutUs = this.page.getByLabel('Header').getByRole('link', { name: 'About Us' });
    this.leadershipLink = this.page.getByLabel('Header').getByRole('link', { name: 'Leadership' });
    this.locationsLink = this.page.getByLabel('Header').getByRole('link', { name: 'Locations' });
    this.cookieConsentBanner = this.page.getByRole('button', { name: 'Accept cookies' });
    this.contactUs = this.page.getByRole('link', { name: 'Contact Us', exact: true });
  }

  async open() {
    await this.page.goto('/');
  }

  async dismissCookieBanner(): Promise<void> {
    await this.cookieConsentBanner.click();
  }

  async verifyPageLoaded(): Promise<boolean> {
    return await this.headerNavigation.isVisible();
  }

  async shouldHaveHeroSection(): Promise<void> {
    return await expect(this.main).toMatchAriaSnapshot(landing_page_aria_snapshot);
  }

  async navigateToLeadershipPage(): Promise<void> {
    await this.aboutUs.hover().then(async () => {
      await this.leadershipLink.click();
    });
  }

  async navigateToLocationsPage(): Promise<void> {
    await this.aboutUs.hover().then(async () => {
      await this.locationsLink.click();
    });
  }

  async navigateToContactUsPage(): Promise<void> {
    await this.contactUs.click();
  }
}
