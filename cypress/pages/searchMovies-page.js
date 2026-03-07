
Cypress.Commands.add('PreencheBusca', (movieName) => {//preenche e da enter
  //garante que esta na pagina certa
  cy.visit('https://www.themoviedb.org/') 
  cy.get('#inner_search_v4').type(`${movieName}{enter}`)
  
})

Cypress.Commands.add('ValidaResultadoEncontrado', (movieName) => {//validando utilizando a classe tittle
  //verifica se a classe "results" contém a mensagem
  cy.get('.title').contains(movieName).should('be.visible')
})

Cypress.Commands.add('ValidaResultadoNaoEncontrado', () => {//validando utilizando a classe results flex
  //verifica se a classe "results" contém a mensagem
  cy.get('.results').contains('Não foram encontrados filmes que correspondam aos seus critérios de busca').should('be.visible')
})



