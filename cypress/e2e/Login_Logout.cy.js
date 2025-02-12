describe('Access to Home Page', () => {
  it('Verify elements after login', () => {
    cy.login('admin', 'admin')
    cy.logout()
  })
})