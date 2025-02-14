describe('Navigate from main page', () => {
    it('Goes to different workspaces', () => {
      cy.login('admin') 
      cy.goTo('menuExigences')
      cy.url().should('include', '/requirement-workspace')
      cy.goTo('menuCasDeTest')  
      cy.url().should('include', '/test-case-workspace')
      cy.goTo('menuExecutions')  
      cy.url().should('include', '/campaign-workspace')
      cy.goTo('menuActions')  
      cy.closeDialogBox()
      cy.logout()
    })
  })