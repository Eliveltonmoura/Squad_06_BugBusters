import '../../pages/searchMovies-page'

describe('CT-SEARCH-001 - Busca filme no TMDB', () => {

  it('Deve buscar um filme existente. Ex: Os Simpsons', () => {
    cy.searchMovie('Os Simpsons')
  })
  it('Deve buscar um filme existente. Ex: O Poderoso Chefão', () => {
    cy.searchMovie('O Poderoso Chefão')
  })
  it('Deve buscar um filme existente. Ex: Matrix', () => {
    cy.searchMovie('Matrix')
  })
})