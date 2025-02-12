describe('Navigate to administration menus', () => {
  it('Goes to Administration Menu and verify SUb-Menus', () => {
    cy.login('admin', 'admin')

    cy.goToSubMenu('menuAdministration', 'sousMenuUtilisateurs')
    cy.goToMenu('menuProjets')
    cy.goToMenu('menuJalons')
    cy.goToMenu('menuEntites') 
    cy.goToMenu('menuServeurs')
    cy.goToMenu('menuProfils')
    cy.goToMenu('menuSysteme')
    cy.goToMenu('exit')

    cy.logout()
  })
})