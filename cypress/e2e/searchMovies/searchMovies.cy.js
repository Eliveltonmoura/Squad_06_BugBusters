import '../../pages/searchMovies-page'

describe('CT-SEARCH-001 - Busca filme no TMDB', () => {

  it('Deve buscar um filme existente. Ex: Os Simpsons', () => {
    cy.PreencheBusca('Os Simpsons')
    cy.ValidaResultadoEncontrado('Os Simpsons')
  })
  it('Deve buscar um filme existente. Ex: O Poderoso Chefão', () => {
    cy.PreencheBusca('O Poderoso Chefão')
    cy.ValidaResultadoEncontrado('O Poderoso Chefão')
  })
  it('Deve buscar um filme existente. Ex: Matrix', () => {
    cy.PreencheBusca('Matrix')
    cy.ValidaResultadoEncontrado('Matrix')
  })
})