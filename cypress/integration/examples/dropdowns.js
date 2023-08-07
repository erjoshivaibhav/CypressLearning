
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){

it("Static Dropdown",function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')

})

it("Dynamic Dropdown",function(){

  cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  cy.get('#autocomplete').type('ind')
  cy.get('.ui-menu-item div.ui-menu-item-wrapper').each(($el, index, $list) => {

    if($el.text()==='India'){
      $el.click() 
    }

  })
  
  })

})