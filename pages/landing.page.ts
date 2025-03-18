import { expect, Page } from '@playwright/test';
import { landing_page_aria_snapshot } from '../fixtures/snapshots/landing-page';

export class LandingPage {
  private headerNavigation = this.page.getByRole('banner');
  private main = this.page.getByRole('main');
  private aboutUs = this.page.getByLabel('Header').getByRole('link', { name: 'About Us' });
  private leadershipLink = this.page.getByLabel('Header').getByRole('link', { name: 'Leadership' });

  constructor(protected page: Page) {}

  async open() {
    await this.page.goto('/');
  }

  async shouldHaveHeaderNavigation(): Promise<boolean> {
    return await this.headerNavigation.isVisible();
  }

  async shouldHaveHeroSection(): Promise<void> {
    return await expect(this.main).toMatchAriaSnapshot(landing_page_aria_snapshot);
  }

  async navigateToLeadershipPage(): Promise<void> {
    await this.aboutUs.click();
    await this.leadershipLink.click();
  }
}
