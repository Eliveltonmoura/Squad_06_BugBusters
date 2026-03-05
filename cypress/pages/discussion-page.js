const seletor = {
  assunto: "#subject",
  mensagem: "#message",
  submit: "#submit"
}

Cypress.Commands.add('create_discussion', ({assunto, mensagem})=> {

  cy.get(seletor.assunto)
    .should('be.visible')
    .type(assunto)

  cy.get(seletor.mensagem)
    .should('be.visible')
    .type(mensagem)

  cy.get(seletor.submit).click()

  cy.contains('Responder').should('be.visible')

})

Cypress.Commands.add('assunto_empty_discussion', ({assunto, mensagem})=> {

  cy.get(seletor.assunto)
    .should('be.visible')

  cy.get(seletor.mensagem)
    .should('be.visible')
    .type(mensagem)

  cy.get(seletor.submit).click()

  cy.contains('Responder').should('be.visible')

})

Cypress.Commands.add('mensagem_empty_discussion', ({assunto, mensagem})=> {

  cy.get(seletor.assunto)
    .should('be.visible')
    .type(assunto)

  cy.get(seletor.mensagem)
    .should('be.visible')

  cy.get(seletor.submit).click()

  cy.contains('Responder').should('be.visible')

})