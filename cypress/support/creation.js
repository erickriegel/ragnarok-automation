Cypress.Commands.add('addRequirement', (requirementName, requirementDescription, requirementAction) => {
  cy.log(`Ajout d'une exigence: ${requirementName}`)
  cy.createNewElement('Exigence')
  cy.fillFieldWith('Nom', requirementName)
  cy.fillIframe(requirementDescription)
  cy.actionToPerform(requirementAction) 
})

Cypress.Commands.add('addTestCase', (testCaseName, testCaseDescription, testCaseAction) => {
  cy.log(`Ajout d'un cas de test: ${testCaseName}`) 
  cy.createNewElement('CasDeTest')
  cy.fillFieldWith('Nom', testCaseName)
  cy.fillIframe(testCaseDescription)
  cy.actionToPerform(testCaseAction) 
})

Cypress.Commands.add('addFolder', (folderName, folderDescription, folderAction) => {
  cy.log(`Ajout d'un dossier: ${folderName}`) 
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
  cy.get('[data-test-dialog-button-id=' + (menuConfig[dialogAction] || dialogAction) + ']')
  //.should('be.visible')
  .should('exist')
  .click()
})

Cypress.Commands.add('fillIframe', (description) => {
  // cy.get('iframe')
  // .its('0.contentDocument')
  // .should('exist')
  // .then((iframe) => {
  //   const inputField = iframe.querySelector('body[role="textbox"]'); 
  //   cy.wrap(inputField).type(description)
  // })
  cy.get('iframe').then(($iframe) => {
    const $body = $iframe.contents().find('body[role="textbox"]')
    cy.wrap($body)
      //.should('be.visible')
      .should('exist')
      .type(description)
  });    
})

Cypress.Commands.add('fillFieldWith', (fieldName, textToFill) => {
  const menuConfig = {
      Nom: 'name',
      Description: 'description',
    };
  cy.get('[data-test-input-name=' + (menuConfig[fieldName] || fieldName) + ']')
    .type(textToFill)
})

Cypress.Commands.add('createNewElement', (elementToCreate) => {
  const menuConfig = {
      Exigence: 'new-requirement',
      CasDeTest: 'new-test-case',
      Dossier: 'new-folder'
    };
  cy.get('[data-test-toolbar-button-id="create-button"]')
    //.should('be.visible')
    .should('exist')
    .click()
  cy.get('[data-test-menu-item-id=' + (menuConfig[elementToCreate] || elementToCreate) + '] > .ant-menu-title-content')
    //.should('be.visible')
    .should('exist')
    .click()
})