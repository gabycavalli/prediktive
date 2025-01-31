describe('DuckDuckGo Search Validation', () => {
  it('Validates that each search result contains the word "android" in the title', () => {
    // Visita la página de búsqueda
    cy.visit('https://duckduckgo.com/?t=h_&hps=1&start=1&q=andriod&ia=web');

    // Esperar a que los resultados carguen
    cy.get('.react-results--main', { timeout: 10000 }).should('be.visible'); // Espera que sea visible

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

    cy.get(
      ':nth-child(2) > .KE_4ibtn0WI3iUo6lJw9 > .UWzy821Y58lvrLxQ7fnz > .sG3VWKPgDjJAlSrJSoLP'
    ).click();

    cy.get(
      ':nth-child(2) > .KE_4ibtn0WI3iUo6lJw9 > [data-testid="dropdown-options"] > .IrVYRCUvYQ98h_9Xp7aN'
    )
      .children()
      .then(($children) => {
        // Iterar sobre el número total de hijos encontrados
        const totalChildren = $children.length;
        let count = 0; // Contador de elementos válidos

        cy.log(`Total de elementos encontrados: ${totalChildren}`);

        for (let i = 2; i <= totalChildren; i++) {
          // Construir el selector dinámicamente usando nth-child
          const dynamicSelector = `:nth-child(${i}) > .BDI1KtNF8HUPBZ4Cw_nK`;

          cy.get(
            `:nth-child(2) > .KE_4ibtn0WI3iUo6lJw9 > [data-testid="dropdown-options"] > .IrVYRCUvYQ98h_9Xp7aN > ${dynamicSelector}`
          ).then(($element) => {
            if ($element.length > 0) {
              // Validar que el elemento existe y es visible
              cy.wrap($element).then(() => {
                count++; // Incrementar contador si pasa todas las validaciones
              });
            }
          });
        }

        // Validar que el total sea mayor a 10 después de iterar
        cy.wrap(null).then(() => {
          cy.log(`Elementos válidos encontrados: ${count}`);
          expect(count).to.be.greaterThan(10);
        });
      });
  });
});
