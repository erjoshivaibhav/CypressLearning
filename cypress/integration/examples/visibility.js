
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){

it("Visibility/Invisibility",function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#displayed-text').should('be.visible')

//click on hide button
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')

//click show button
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')

})


 

})