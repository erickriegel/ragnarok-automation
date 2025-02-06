describe('Navigate to administration menus', () => {
  it('Verify element in Administration Menu', () => {
    cy.login('admin', 'admin')

// Déroule le sous-menu "Administration" et clique sur "Users"
    cy.get('[data-test-navbar-field-id="administration"]').click()
    cy.get(':nth-child(1) > .nav-bar-link').click();
    cy.url().should('include', '/administration-workspace/users/manage')

    // Clique sur "Projects"
    cy.get('[data-test-navbar-field-id="nav-bar-menu-projects"]').click() 
    cy.url().should('include', '/administration-workspace/projects')
    
    // Clique sur "Users"
    cy.get('[data-test-navbar-field-id="nav-bar-menu-users"]').click()
    cy.url().should('include', '/administration-workspace/users/manage')
    
  })
})