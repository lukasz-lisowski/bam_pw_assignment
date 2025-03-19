import { expect, Page } from '@playwright/test';
import { founders_page_aria_snapshot } from '../fixtures/snapshots/founders-page';

const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class LeadershipPage {
  constructor(protected page: Page) {}

  private header = this.page.locator('#gsap-hero-eyebrow');
  private founders = this.page.getByText('FoundersDmitry');

  async verifyPageLoaded(): Promise<void> {
    await expect(this.header).toBeVisible(ELEMENT_TIMEOUT);
  }

  async verifyFoundersVisible(): Promise<void> {
    return await expect(this.founders).toMatchAriaSnapshot(founders_page_aria_snapshot);
  }
}
