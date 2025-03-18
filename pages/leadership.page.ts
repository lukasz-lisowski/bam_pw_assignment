import { expect, Page } from '@playwright/test';
import { founders_page_aria_snapshot } from '../fixtures/snapshots/founders-page';

const ELEMENT_TIMEOUT = { timeout: Number(process.env.TIMEOUT) };

export class LeadershipPage {
  private header = this.page.getByRole('heading', { name: 'Our leadership team' });
  private founders = this.page.getByText('FoundersDmitry');

  constructor(protected page: Page) {}

  async verifyPageLoaded(): Promise<boolean> {
    return await this.header.isVisible(ELEMENT_TIMEOUT);
  }

  async verifyFoundersVisible(): Promise<void> {
    return await expect(this.founders).toMatchAriaSnapshot(founders_page_aria_snapshot);
  }
}
