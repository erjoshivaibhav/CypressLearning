
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){


it("Confirm",function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    cy.get("table[name='courses'] tr td:nth-child(2)").each(($el,index,$list)=>{

      var courseName=$el.text()
      if(courseName.includes('Python')){
        cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price){

            expect(price.text( )).to.equal('25')
        })
      }
        

    })
    
})





 

})
