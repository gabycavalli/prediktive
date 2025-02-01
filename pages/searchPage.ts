import { config } from '../cypress/config/config';
import{ SearchPageSelectors } from '../pages/selectors';

class SearchPage {
  visit(query: string) {
    cy.visit(config.url + `/?t=h_&hps=1&start=1&q=${query}&ia=web`);
  }

  getSearchResults() {
    return cy.get(SearchPageSelectors.resultsContainer).find(SearchPageSelectors.resultItem);
  }

  getResultTitle(result: JQuery<HTMLElement>) {
    return cy.wrap(result).find(SearchPageSelectors.resultTitle).invoke('text');
  }

  clickAllRegions() {
    return cy.get(
      SearchPageSelectors.allRegionsButton
    ).click();
  }

  getRegionOptions() {
    return cy.get(
      SearchPageSelectors.regionsOptionsContainer
    ).children();
  }
}

export const searchPage = new SearchPage();
