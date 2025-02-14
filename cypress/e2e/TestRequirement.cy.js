describe('Create New Requirement', () => {
  it('Goes to Exigences Workspace, create new folder and inside a new Requirement', () => {
    const timestamp = new Date().toISOString().replace(/[-:.]/g, '')
    const folderName = `Nouveau dossier automatique-${timestamp}`
    const requirementName = `Nouvelle exigence automatique-${timestamp}`

    cy.login('admin')
    cy.goTo('menuExigences')  
    cy.contains("Ragnarok").click()
    cy.addFolder(folderName, "Nouvelle description automatique", "Ajouter")
    cy.addRequirement(requirementName, "Nouvelle description Exigence automatique", "Ajouter")
    cy.logout()
   })  
})