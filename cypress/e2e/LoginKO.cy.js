describe('Access to Home Page', () => {
  it('Verify elements after login', () => {
    cy.login('frefze', 'afzefzef')
    cy.logout()
  })
})