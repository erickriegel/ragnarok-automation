Cypress.Commands.add('closeDialogBox', () => {
    cy.get('[data-test-dialog-button-id="close"]')
      .should('be.visible')
      .click()
  })

Cypress.Commands.add('goTo', (menu) => {
    const menuConfig = {
      menuExigences: 'requirement-link',
      menuCasDeTest: 'test-case-link',
      menuExecutions: 'campaign-link',
      menuPilotage: 'custom-report-link',
      menuActions: 'fake-action-word'
    };
    cy.get('[data-test-element-id=' + (menuConfig[menu] || menu) + ']')
      .should('be.visible')
      .click()
  })

Cypress.Commands.add('goToMenu', (menu) => {
    const menuConfig = {
      // Page principale
      menuAdministration: 'administration',
      menuAutomatisation: 'automation',
      menuAide: 'help',
      menuFiltreProjets: 'project-filter',
      //Page Administration
      menuUtilisateurs: 'nav-bar-menu-users',
      menuProjets: 'nav-bar-menu-projects',
      menuJalons: 'nav-bar-menu-milestones',
      menuEntites: 'nav-bar-menu-entities-customization',
      menuServeurs: 'nav-bar-menu-servers',
      menuProfils: 'nav-bar-menu-profiles',
      menuSysteme: 'nav-bar-menu-system',
      //Sortie
      menuExit: 'exit'
    };  
    // Aller au menu
    cy.get('[data-test-navbar-field-id=' + (menuConfig[menu] || menu) + ']')
      //.should('be.visible')
      .click()
  })
  

  Cypress.Commands.add('goToSubMenu', (menu, subMenu) => {
    const subMenuConfig = {
      //Automatisation
      sousMenuAutomaticien: 'programmer',
      sousMenuTesteur: 'tester',
      // Administration
      sousMenuUtilisateurs: 'users',
      sousMenuProjets: 'projects',
      sousMenuJalons: 'milestones',
      sousMenuEntites: 'customization',
      sousMenuServeurs: 'servers',
      sousMenuProfils: 'profiles',
      sousMenuSysteme: 'system'
    };  
    // Aller au menu principal
    cy.goToMenu(menu)  
    // Cliquer sur le sous-menu
    cy.get('.nav-bar-link[data-test-menu-item-id=' + subMenuConfig[subMenu] || subMenu + ']')
      .should('be.visible')
      .click()
  })