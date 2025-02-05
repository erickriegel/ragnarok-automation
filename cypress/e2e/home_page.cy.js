describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[formcontrolname="login"]').type('admin')
    cy.get('[formcontrolname="password"]').type('admin')
    cy.get('#submit-login-form').click()
    cy.url().should('include', '/home-workspace')
    
    cy.get('[data-test-element-id="show-welcome-message-button"]')
    cy.get('[data-test-element-id="show-dashboard-button"]')

  })
})