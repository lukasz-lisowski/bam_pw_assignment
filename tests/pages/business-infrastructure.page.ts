import { expect, Locator, Page } from '@playwright/test';
import { business_infrastructure_page_aria_snapshot } from '../fixtures/snapshots/business-infrastructure-page';

export class BusinessInfrastructurePage {
  readonly infrastructureHeader: Locator;
  readonly infrastructureGrid: Locator;

  constructor(protected page: Page) {
    this.infrastructureHeader = this.page.getByRole('heading', { name: 'Collaborating across' });
    this.infrastructureGrid = this.page.getByText('AccountingBroker Relations &');
  }

  async verifyPageLoaded(): Promise<boolean> {
    return await this.infrastructureHeader.isVisible();
  }

  async shouldHaveEholeInfrastructure(): Promise<void> {
    return await expect(this.infrastructureGrid).toMatchAriaSnapshot(business_infrastructure_page_aria_snapshot);
  }
}
