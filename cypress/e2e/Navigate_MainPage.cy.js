describe('Navigate from main page', () => {
    it('Goes to different workspaces', () => {
      cy.login('admin', 'admin') 
      cy.goTo('menuExigences')
      cy.goTo('menuCasDeTest')  
      cy.goTo('menuExecutions')  
      cy.goTo('menuActions')  
      cy.closeDialogBox()
      cy.logout()
    })
  })