/// <reference types="cypress" />

import { searchPage } from '../../pages/searchPage';
import { config } from '../config/config';

describe('DuckDuckGo Search Result Title Validation', () => {
  it(`Ensures that the title of each search result contains the word "${config.query}"`, () => {
      searchPage.visit(config.query);  // Visit the search page    
      searchPage.getSearchResults().each(($result, index) => { // Wait for the results load and validate each title
        const resultIndex = index as number;
        searchPage.getResultTitle($result).then((title) => {
        // Validations
        cy.wrap(title).should('include', config.query); // Verify that the title includes the query
        cy.wrap(title).should('not.be.empty'); // Verify that the title is not empty
        cy.log(`Result ${resultIndex + 1}: ${title}`);
        });
      });
  });
});


