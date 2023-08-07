/// <reference types='cypress' />

describe("Adding Token",function(){

    it("Test1",function(){


        cy.LoginAPI().then(function(){
            cy.visit("https://www.rahulshettyacademy.com/client",
        {
            onBeforeLoad:function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })
        })


        // adding products to cart and place order
        cy.get(".card-body b").each(($ele,index,$list)=>{

            if($ele.text() === 'iphone 13 pro'){
                cy.get('.card-body button[style="float: right;"]').eq(index).click()
            }

        })

        cy.get('button[routerlink="/dashboard/cart"]').click()
        cy.contains('Checkout').click()
        cy.get('input[placeholder="Select Country"]').type('India')
        cy.get('section .ta-results span').each(($ele,index,$list)=>{
           if($ele.text().trim()==='India'){
            $ele.click()
        
        }

        cy.contains('Place Order').click()
        cy.wait(2000)
        cy.contains('Click To Download Order Details in CSV').click()
        })

        

        
        
    })
})