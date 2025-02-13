describe('Create New Cas de Test', () => {
  it('Goes to Cas de Test Workspace', () => {
    cy.login('admin', 'admin')
    cy.goTo('menuCasDeTest')  
    cy.contains("Ragnarok").click()
    cy.addFolder("Nouveau dossier automatique", "Nouvelle description automatique", "Ajouter")
    cy.addTestCase("Nouveau Cas de Test automatique", "Nouvelle description cas de test automatique", "Ajouter")
    cy.logout()
   })
})