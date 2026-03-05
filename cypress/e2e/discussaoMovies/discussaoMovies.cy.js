import '../../pages/searchMovies-page'
import '../../pages/login-page'
import '../../pages/discussion-page'


const user = {
  email: 'João_th',
  password: 'dfgh'
}

const discussoes = {
  assunto: "Personagens da trama",
  mensagem: "Quais serão os personagens que vão aparecer nessa temporada"
}

const filmeEscolhido = 'Jovem Sherlock'

describe('Criar discussão de filme', () => {

  // 🔹 Preparação de estado
  beforeEach(() => {
    cy.visit('https://www.themoviedb.org/login')

    cy.login(user)

    cy.visit('https://www.themoviedb.org/movie')

    cy.searchMovie(filmeEscolhido)

    cy.contains(filmeEscolhido).click()

    cy.get('#discussions').click()

    cy.contains('a', 'Ir para as discussões').click()

    cy.get('#new_discussion')
      .should('be.visible')
      .click()

    
  })
  
  it('deve criar uma discussão quando assunto e mensagem são preenchidos', () => {
  
    cy.create_discussion(discussoes)

    cy.contains('Responder').should('be.visible')
  })

  it('deve exibir erro ao tentar criar discussão sem assunto', () => {
  
    cy.assunto_empty_discussion(discussoes)

    cy.contains('Responder').should('be.visible')
  })

  it('deve exibir erro ao tentar criar discussão sem mensagem', () => {
  
    cy.mensagem_empty_discussion(discussoes)

    cy.contains('Responder').should('be.visible')
  })


})
