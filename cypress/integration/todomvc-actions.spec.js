/// <reference types="cypress" />
import { TodoPage } from "../pageObjects/todo-page";

describe ('todo actions', () => {
    const todoPage = new TodoPage()

  before (() => {
    todoPage.navigate()
  })
    
    it('verify adding todo elements', () => {
        todoPage.addTodo('leard cypress')
        todoPage.validateText(0, 'leard cypress')
    });
    
    it('verify adding second item to list', () => {
        cy.get('.new-todo').type("learn Mocha{enter}")
        cy.get('.new-todo').type("learn page objects{enter}")
    });
    
    it('verify marking task as completed', () => {
        cy.get('.toggle').should('not.be.checked')
        cy.get(':nth-child(3) > .view > .toggle').click()
        cy.get('label').should('have.css', 'text-decoration-line')
    });
    
    it('verify deleting all items', () => {
        cy.get('li[class=""] div input.toggle').click( { multiple: true })
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants', 'li')
    });
})
