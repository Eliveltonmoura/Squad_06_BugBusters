
Cypress.Commands.add('login', (user)=> {

  cy.get('#username').type(user.email)
  cy.get('#password').type(user.password)
  cy.get('#login_button').click()

  cy.url().should('not.include', 'login')
})