describe('DuckDuckGo Search Validation', () => {
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
});

//cy.get(':nth-child(2) > .KE_4ibtn0WI3iUo6lJw9 > .UWzy821Y58lvrLxQ7fnz > .sG3VWKPgDjJAlSrJSoLP') flecha dropdown
//cy.get('[data-testid="region-filter-label"]') label filtro region
//cy.get(':nth-child(2) > .KE_4ibtn0WI3iUo6lJw9 > [data-testid="dropdown-options"]') dropdpwn con las opciones
