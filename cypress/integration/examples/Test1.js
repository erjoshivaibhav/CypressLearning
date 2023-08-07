
/// <reference types="cypress" />

describe("My first test suite",function(){

it("My first Test case",function(){

    //code
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
   cy.get('.search-keyword').type("ca")
   cy.get('.product:visible').should('have.length',4)
})

})