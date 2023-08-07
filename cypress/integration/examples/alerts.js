
/// <reference types="cypress" />

describe("Checkboxes scenarios",function(){

it("Alert",function(){

cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

cy.get('input[value="Alert"]').click()

})

it("Confirm",function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    
    cy.get('#confirmbtn').click()
    
    })

it("Alert text validation",function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(2000)
    cy.get('input[value="Alert"]').click()

    cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        
    })
        
    })

    it("Confirm text validation",function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.wait(2000)
        cy.get('#confirmbtn').click()
    
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            
        })
            
        })


 

})