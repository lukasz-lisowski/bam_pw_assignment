import { expect, Locator, Page } from '@playwright/test';
import { locations_page_aria_snapshot } from '../fixtures/snapshots/locations-page';

export class LocationsPage {
  readonly locationsHeader: Locator;
  readonly locationsSection: Locator;

  constructor(protected page: Page) {
    this.locationsHeader = this.page.getByText('LocationsPrimary Offices');
    this.locationsSection = this.page.locator('div').filter({ hasText: 'AalborgBalyasny Management (' }).nth(3);
  }

  async verifyPageLoaded(): Promise<boolean> {
    return await this.locationsHeader.isVisible();
  }

  async shouldHaveAllLocations(): Promise<void> {
    return await expect(this.locationsSection).toMatchAriaSnapshot(locations_page_aria_snapshot);
  }
}
