/// <reference types='cypress' />

describe("intercept",function(){

    it("intercept",function(){

        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",(req)=>{

        //mocking request, we will change shetty to malhotra
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        req.continue((req)=>
        {
           expect(req.statusCode).to.equal(403)
        })

        }).as('dummyUrl')

        cy.visit("https://www.rahulshettyacademy.com/angularAppdemo")


        cy.get("button[class='btn btn-primary']").click()
        cy.wait('@dummyUrl')






    })
})