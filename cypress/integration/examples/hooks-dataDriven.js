/// <reference types="cypress" />


describe("Data driven & Hooks",function(){

    before(function(){
        cy.fixture("example.json").then(function(data){

            this.data=data
        })
    })

    it("Test1",function(){

        cy.visit("www.rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-Child(2)").type(this.data.name)
        
        cy.get("select[class='form-control']").select(this.data.gender)

        //some validations
        //1. Two-way Data Binding example: should have value same as Name
        cy.get("input[name='name']:nth-Child(1)").should("have.value",this.data.name)

        //2. To validate value of any attribute
        cy.get("input[name='name']:nth-Child(2)").should("have.attr","minlength","2")

        //3. To check one of the radio button is disabled
        cy.get("#inlineRadio3").should("be.disabled")

        //4. Add Multiple product to cart
        cy.get("a[href='/angularpractice/shop']").click();
        this.data.products.forEach(function(product){

            cy.addProduct(product)

        })
        


    })
    


})