describe('Navigate to requirements menu', () => {
    it('Goes to Administration Menu and verify SUb-Menus', () => {
      cy.login('admin', 'admin')
 
      cy.goTo('menuExigences')
      cy.goTo('menuCasDeTest')  
      cy.goTo('menuExecutions')  
      cy.goTo('menuActions')  
      cy.closeDialogBox()

      cy.logout()
    })
  })