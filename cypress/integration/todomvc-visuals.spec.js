/// <reference types="cypress" />
import { TodoPage } from "../pageObjects/todo-page";
describe('visual validation', () => {

    const todoPage = new TodoPage()

    before(() => todoPage.navigate())

    beforeEach(() => cy.eyesOpen({
        appName: 'todo mvc', 
        batchName: 'myTestBatch',
        browser: [
            {name: 'chrome', width: 1024, height: 768},
            {name: 'chrome', width: 800, height: 600},
            {name: 'firefox', width: 1024, height: 768},
            {deviceName: 'iPhone X'},
          ]
    }))
    afterEach(() => cy.eyesClose())

    it('shpould look good', () => {
        cy.eyesCheckWindow('empty todo list')
        todoPage.addTodo("Clean room")
        todoPage.addTodo('Learn JS')
        cy.eyesCheckWindow('two todo list')

        todoPage.toggle(1)
        cy.eyesCheckWindow('one todo marked list')
    })
})