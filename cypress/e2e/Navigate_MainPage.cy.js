describe('Navigate from main page', () => {
    it('Goes to different workspaces', () => {
      cy.login('admin') 
      cy.goTo('menuExigences')
      //cy.wait(4000);  
      //cy.url({ timeout: 10000 }).should('include', '/requirement-workspace')
      //cy.location('pathname', { timeout: 10000 }).should('eq', '/squash/requirement-workspace');
      cy.waitUntil(() =>
        cy.url().then(url => url.includes('/requirement-workspace')),
        { timeout: 10000 }
      );
      cy.goTo('menuCasDeTest')
      //cy.wait(4000);  
      //cy.url({ timeout: 10000 }).should('include', '/test-case-workspace')
      //cy.location('pathname', { timeout: 10000 }).should('eq', '/squash/test-case-workspace');
      cy.waitUntil(() =>
        cy.url().then(url => url.includes('/test-case-workspace')),
        { timeout: 10000 }
      );
      cy.goTo('menuExecutions')  
      //cy.wait(4000);
      //cy.url({ timeout: 10000 }).should('include', '/campaign-workspace')
      //cy.location('pathname', { timeout: 10000 }).should('eq', '/squash/campaign-workspace');
      cy.waitUntil(() =>
        cy.url().then(url => url.includes('/campaign-workspace')),
        { timeout: 10000 }
      );
      cy.goTo('menuActions')  
      cy.closeDialogBox()
      cy.logout()
    })
  })