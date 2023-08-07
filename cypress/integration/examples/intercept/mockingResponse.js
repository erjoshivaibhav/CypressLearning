/// <reference types='cypress' />

describe("intercept",function(){

    it("intercept",function(){


cy.intercept(
    {
        //request object
        url:"https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
        method:"GET"
    },
    {
        //response object
        body:[
            {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }],
            statusCode:200
    }).as("mocked")

    cy.visit("https://www.rahulshettyacademy.com/angularAppdemo")

    cy.get('button[routerlink]').click()
    

    cy.wait("@mocked").should(({request,response})=>{
        cy.get("tbody tr").should("have.length",response.body.length)
    })




    })
})