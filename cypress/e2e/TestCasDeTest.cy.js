describe('Create New Cas de Test', () => {
  it('Goes to Cas de Test Workspace, create new folder and inside a new TestCase', () => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, ''); 
    const folderName = `Nouveau dossier automatique-${timestamp}`; 
    const testCaseName = `Nouveau Cas de Test automatique-${timestamp}`;

    cy.login('admin', 'admin')
    cy.goTo('menuCasDeTest')  
    cy.contains("Ragnarok").click()
    cy.addFolder(folderName, "Nouvelle description automatique", "Ajouter")
    cy.addTestCase(testCaseName, "Nouvelle description cas de test automatique", "Ajouter")
    cy.logout()
   })
})