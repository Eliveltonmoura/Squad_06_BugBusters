import '../../pages/searchMovies-page'

describe('CT-SEARCH-002 - Busca filme no TMDB', () => {

  it('Deve buscar um filme inexistente. Ex: filme inexistente', () => {
    cy.searchMovieInexistent('filme inexistente')
  })
  it('Deve buscar um filme existente. Ex: qa automatizado berimbal metalizado', () => {
    cy.searchMovieInexistent('qa automatizado berimbal metalizado')
  })
  it('Deve buscar um filme existente. Ex: qa automatizado é legal', () => {
    cy.searchMovieInexistent('qa automatizado é legal')
  })
})