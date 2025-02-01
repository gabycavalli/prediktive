// cypress/page-objects/SearchPage.ts
import { config } from '../cypress/config/config';

class SearchPage {
  visit(query: string) {
    cy.visit(config.url + `/?t=h_&hps=1&start=1&q=${query}&ia=web`);
  }

  getSearchResults() {
    return cy.get('.react-results--main').find('[data-testid="result"]');
  }

  getResultTitle(result: Cypress.Chainable) {
    return result.find('[data-testid="result-title-a"]').invoke('text');
  }
}

export const searchPage = new SearchPage();
