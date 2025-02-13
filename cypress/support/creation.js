Cypress.Commands.add('addTestCase', (testCaseName, testCaseDescription, testCaseAction) => {
    const menuConfig = {
        AjouterUnAutre: 'add-another',
        Ajouter: 'add',
        Annuler: 'cancel'
      };
    cy.createNewElement('CasDeTest')
    cy.fillFieldWith('Nom', testCaseName)
    cy.fillIframe(testCaseDescription)
    cy.actionToPerform(testCaseAction) 
})

Cypress.Commands.add('addFolder', (folderName, folderDescription, folderAction) => {
    const menuConfig = {
        AjouterUnAutre: 'add-another',
        Ajouter: 'add',
        Annuler: 'cancel'
      };
    cy.createNewElement('Dossier')
    cy.fillFieldWith('Nom', folderName)
    cy.fillIframe(folderDescription)
    cy.actionToPerform(folderAction)
})

Cypress.Commands.add('actionToPerform', (dialogAction) => {
    const menuConfig = {
        AjouterUnAutre: 'add-another',
        Ajouter: 'add',
        Annuler: 'cancel'
      };
    cy.get('[data-test-dialog-button-id=' + (menuConfig[dialogAction] || dialogAction) + ']').click()
})

Cypress.Commands.add('fillIframe', (description) => {
    cy.get('iframe')
    .its('0.contentDocument')
    .should('exist')
    .then((iframe) => {
      const inputField = iframe.querySelector('body[role="textbox"]'); 
      cy.wrap(inputField).type(description)
    })
})

Cypress.Commands.add('fillFieldWith', (fieldName, textToFill) => {
  const menuConfig = {
      Nom: 'name',
      Description: 'description',
    };
  cy.get('[data-test-input-name=' + (menuConfig[fieldName] || fieldName) + ']').type(textToFill)
})

Cypress.Commands.add('createNewElement', (elementToCreate) => {
  const menuConfig = {
      Exigence: 'new-requirement',
      CasDeTest: 'new-test-case',
      Dossier: 'new-folder'
    };
  cy.get('[data-test-toolbar-button-id="create-button"]').click()
  cy.get('[data-test-menu-item-id=' + (menuConfig[elementToCreate] || elementToCreate) + '] > .ant-menu-title-content').click();
})