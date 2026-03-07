import '../../pages/searchMovies-page'

describe('CT-SEARCH-003 - Busca filme no TMDB', () => {

  it('Deve buscar um filme sem digitar nada no campo de buscas.', () => {
    cy.PreencheBusca('')
    cy.ValidaResultadoNaoEncontrado()
 })
})

  