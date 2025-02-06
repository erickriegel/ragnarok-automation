describe('Access to Home Page', () => {
  it('Verify elements after login', () => {
    cy.login('frefze', 'afzefzef')

    cy.get('[data-test-element-id=custom-report-link')
    cy.logout()


  })
})