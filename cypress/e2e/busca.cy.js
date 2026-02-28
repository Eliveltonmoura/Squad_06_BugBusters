describe('Busca no TMDB', () => {

  it('Deve buscar um filme existente', () => {
    cy.visit('https://www.themoviedb.org/')

    // localizar campo de busca
    cy.get('#inner_search_v4').should('be.visible')

    // digitar termo e enviar
    cy.get('#inner_search_v4').type('Inception{enter}')

    // validar que resultado aparece
    cy.contains('Inception').should('be.visible')
  })

})