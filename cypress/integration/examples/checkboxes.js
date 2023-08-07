
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){

it("TestCase1",function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')

})

it("TestCase2",function(){

  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  cy.get('#checkBoxOption1').uncheck()
  cy.get('input[type="checkbox"]').check(['option2','option3']).should('be.checked')
  
  })

})