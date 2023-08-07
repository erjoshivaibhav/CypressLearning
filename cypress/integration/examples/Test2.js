
/// <reference types="cypress" />

describe("My first test suite",function(){

it("My first Test case",function(){

    //code
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/") 
   cy.get('.search-keyword').type("ca")
   cy.wait(2000)
   //cy.get('.products').find('.product').eq(0).find("button[type='button']").click()
   cy.get('.products').find('.product').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    
   // $el.find("button[type='button']").click()
  //cy.log($el.find('.products .product .product-name').text()) 
  if($el.find('.product-name').text().includes('Cauliflower')){
    cy.log($el.find('.product-name').text())
    cy.log($el.find("a[class='increment']"))
    $el.find("a[class='increment']").click()
    cy.wait(2000)
    $el.find("button[type='button']").click()
  }

  })

})

})