/// <reference types="cypress" />
describe ('filtering', () => {
    beforeEach (() => {
      cy.visit('http://todomvc-app-for-testing.surge.sh/')
      cy.get('.new-todo').type("leard cypress{enter}")
      cy.get('.new-todo').type("learn Mocha{enter}")
      cy.get('.new-todo').type("learn page objects{enter}")
      cy.get(':nth-child(2) > .view > .toggle').click()
    })
      
      it('verify filtering active todos', () => {
          cy.contains('Active').click()
          cy.get('.todo-list li').should('have.length', 2)
      });

      it('verify filtering completed todos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    });

    it('verify filtering All todos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    });
      
  })
  