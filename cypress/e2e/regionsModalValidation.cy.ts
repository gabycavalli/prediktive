/// <reference types="cypress" />

//import { describe, it } from 'node:test';
import { searchPage } from '../../pages/searchPage';
import { config } from '../config/config';
import { SearchPageSelectors } from '../../pages/selectors';


describe('DuckDuckGo Regions Modal Validation', () => {
  it('Assert that the total count of region options is greater than 10', () => {
    searchPage.visit(config.query); // Visit search page
    cy.get(SearchPageSelectors.resultsContainer, { timeout: 10000 }).should('be.visible'); // Wait for results to load
    searchPage.clickAllRegions();  // Click on the dropdown “All Regions”.
    searchPage.getRegionOptions().then(($options) => { // Obtain the total of options and the visible total
      const totalCount = $options.length;
      cy.log(`Total count of dropdown elements (all): ${totalCount}`);    
      cy.wrap(totalCount).should('be.greaterThan', config.totalToValidate); // Validate that the total number of options is greater than 10.
    });
  });
});
