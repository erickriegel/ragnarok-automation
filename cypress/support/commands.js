// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.get('[formcontrolname="login"]').type(username)
    cy.get('[formcontrolname="password"]').type(password)
    cy.get('#submit-login-form')
      .should('exist')
      .click()
    cy.url().should('include', '/home-workspace')
    
    cy.get('[data-test-element-id="show-welcome-message-button"]')
    cy.get('[data-test-element-id="show-dashboard-button"]')
  })

  Cypress.Commands.add('logout', () => {
    cy.get('[data-test-navbar-field-id=user-menu]')
      .should('exist')
      .click()
    cy.get('[data-test-menu-item-id=logout]')
      .should('exist')
      .click();
    cy.contains('Vous êtes déconnecté')
  })

  