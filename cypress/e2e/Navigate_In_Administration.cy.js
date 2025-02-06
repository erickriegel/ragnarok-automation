describe('Navigate to administration menus', () => {
  it('Goes to Administration Menu and verify SUb-Menus', () => {
    cy.login('admin', 'admin')

// Déroule le sous-menu "Administration" et clique sur "Users"
    cy.get('[data-test-navbar-field-id="administration"]').click()
    cy.get(':nth-child(1) > .nav-bar-link').click();
    cy.url().should('include', '/administration-workspace/users/manage')
    
    cy.get('[data-test-navbar-field-id="nav-bar-menu-projects"]').click() 
    cy.url().should('include', '/administration-workspace/projects')  

  })

  it('Verify Utilisateurs Menu', () => {
    // Clique sur "Users"
    //cy.contains('Users').click()
    cy.get('[data-test-navbar-field-id="nav-bar-menu-users"]').click()
    cy.url().should('include', '/administration-workspace/users/manage')
    // Clique sur "Projects"
    cy.get('[data-test-navbar-field-id="nav-bar-menu-projects"]').click() 
    cy.url().should('include', '/administration-workspace/projects')    
  })

  it('Verify Projets Menu', () => {
    // Clique sur "Projects"
    cy.get('[data-test-navbar-field-id="nav-bar-menu-projects"]').click() 
    cy.url().should('include', '/administration-workspace/projects')    
  })

  it('Quit Administration space', () => {
    // Clique sur "Projects"
    cy.get('[data-test-navbar-field-id="exit"]').click() 
    cy.url().should('include', '/home-workspace')    
  })

  it('Logout', () => {
    cy.logout() 
  })
})