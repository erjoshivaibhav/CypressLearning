
/// <reference types="cypress" />

describe("Child Window scenarios",function(){


it("Test1",function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
   cy.get('#opentab').then(function(el){

    const url=el.prop('href')
    cy.log(url)
    cy.visit(url)
    cy.origin('www.qaclickacademy.com/',()=>{

      cy.get(".sub-menu-bar a[href*='about']").click()
    })



   })
    
  
    
})







 

})
