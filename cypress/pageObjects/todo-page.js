export class TodoPage {
    navigate() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo (todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }
    validateText (todoIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoIndex +1}) label`).should('have.text', expectedText)
    }

    toggle (todoIndex) {
            cy.get(`.todo-list li:nth-child(${todoIndex + 1}) .toggle`).click()
    }
}