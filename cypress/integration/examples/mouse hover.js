
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){


it("Using Jquery show method",function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click();
    cy.url().should('include','top');
    
  
    
})

it("Force click on invisible element",function(){
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  cy.contains('Top').click({force:true});
    cy.url().should('include','top');
  

  
})





 

})
