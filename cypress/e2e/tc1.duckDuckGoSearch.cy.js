/* describe('DuckDuckGo Search Validation', () => {
  it('Validates that each search result contains the word "android" in the title', () => {
    // Visita la página de búsqueda
    cy.visit('https://duckduckgo.com/?t=h_&hps=1&start=1&q=andriod&ia=web');

    // Esperar a que los resultados carguen
    cy.get('.react-results--main')
      .find('[data-testid="result"]') // Encuentra todos los resultados
      .each(($result, index) => {
        // Dentro de cada resultado, busca el título
        cy.wrap($result)
          .find('[data-testid="result-title-a"]')
          .invoke('text') // Obtén el texto del título
          .then((title) => {
            // Valida que el título incluya "Android"
            expect(title).to.include('Android');
            expect(title).to.not.be.empty;
            cy.log(`Resultado ${index + 1}: ${title}`);
          });
      });
  });
}); */

// cypress/e2e/search/search.spec.ts
import { searchPage } from '../../pages/searchPage';
import { config } from '../config/config';

describe('DuckDuckGo Search Validation', () => {
  it(`Validates that each search result contains the word ${config.query} in the title`, () => {
    // Visita la página de búsqueda
    searchPage.visit(config.query);

    // Espera los resultados y valida el título
    searchPage.getSearchResults().each(($result, index) => {
      searchPage.getResultTitle($result).then((title) => {
        expect(title).to.include('Android');
        expect(title).to.not.be.empty;
        cy.log(`Resultado ${index + 1}: ${title}`);
      });
    });
  });
});
