// Buscando filme existente
Cypress.Commands.add('searchMovie', (movieName) => {
  cy.visit('https://www.themoviedb.org/')
  cy.get('#inner_search_v4').should('be.visible')
  cy.get('#inner_search_v4').type(`${movieName}{enter}`)
  cy.contains(movieName).should('be.visible')
})

// Buscando filme inexistente
Cypress.Commands.add('searchMovieInexistent', (movieName) => {
  cy.visit('https://www.themoviedb.org/')
  cy.get('#inner_search_v4').should('be.visible')
  cy.get('#inner_search_v4').type(`${movieName}{enter}`)
  cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible')
})

// Buscando sem digitar nada
Cypress.Commands.add('searchMovieEmpty', () => {
  cy.visit('https://www.themoviedb.org/')
  cy.get('#inner_search_v4').should('be.visible')
  cy.get('#inner_search_v4').type('{enter}')
  cy.contains('Não foram encontrados filmes que correspondam aos seus critérios de busca.').should('be.visible')
})