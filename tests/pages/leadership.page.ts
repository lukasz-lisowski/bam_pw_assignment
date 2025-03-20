import { expect, Locator, Page } from '@playwright/test';
import { founders_page_aria_snapshot } from '../fixtures/snapshots/founders-page';

const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class LeadershipPage {
  readonly header: Locator;
  readonly founders: Locator;

  constructor(protected page: Page) {
    this.header = this.page.locator('#gsap-hero-eyebrow');
    this.founders = this.page.getByText('FoundersDmitry');
  }

  async verifyPageLoaded(): Promise<void> {
    await expect(this.header).toBeVisible(ELEMENT_TIMEOUT);
  }

  async verifyFoundersVisible(): Promise<void> {
    return await expect(this.founders).toMatchAriaSnapshot(founders_page_aria_snapshot);
  }
}
