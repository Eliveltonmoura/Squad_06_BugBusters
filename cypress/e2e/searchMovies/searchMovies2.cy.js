import '../../pages/searchMovies-page'

describe('CT-SEARCH-002 - Busca filme no TMDB', () => {

  it('Deve buscar um filme inexistente. Ex: filme inexistente', () => {
    cy.PreencheBusca('filme inexistente')
    cy.ValidaResultadoNaoEncontrado()
  })
  it('Deve buscar um filme inexistente. Ex: qa automatizado berimbal metalizado', () => {
    cy.PreencheBusca('Oqa automatizado berimbal metalizado')
    cy.ValidaResultadoNaoEncontrado()
  })
  it('Deve buscar um filme inexistente. Ex: qa automatizado berimbal metalizado', () => {
    cy.PreencheBusca('qa automatizado é legal')
    cy.ValidaResultadoNaoEncontrado()
  })
})

  