/// <reference types='cypress' />
import HomePage from "../pages/homePage"
import ProductsPage from "../pages/productsPage"
import CartPage from "../pages/cartPage"
import PurchasePage from "../pages/purchasePage"



describe("Using POM",function(){

before(function(){
cy.fixture("example.json").then(function(data){

    this.data=data
})

})


it("Test1",function(){
        const homePage=new HomePage
        const productsPage = new ProductsPage
        const cartPage = new CartPage
        const purchasePage = new PurchasePage
        
        // cy.visit("https://www.rahulshettyacademy.com/angularpractice/")
        cy.visit(Cypress.env("baseurl")+"/angularpractice/")


        homePage.getNameTextBox().type(this.data.name)
        
        homePage.getGenderDropdown().select(this.data.gender)

        //some validations
        //1. Two-way Data Binding example: should have value same as Name
        homePage.getTwoWayBindingTextBox().should("have.value",this.data.name)

        //2. To validate value of any attribute
        homePage.getNameTextBox().should("have.attr","minlength","2")

        //3. To check one of the radio button is disabled
        homePage.getEnterpreneurRadioButton().should("be.disabled")

        //click on shop link to go to products page
        homePage.getShopPageLink().click()

        //4. Add Multiple product to cart
        this.data.products.forEach(function(product){

            cy.addProduct(product)

        })

        // CLick on Checkout Button on products page
        productsPage.getCheckoutButton().click()

        // CLick on Checkout Button on cart page
        cartPage.getCheckoutButton().click()

        //Select the country on purchase page
        purchasePage.getCountrySuggestion().type("India")
        cy.get(".suggestions a").each(($el,index,$list)=>{

            var country = $el.text()
            if(country==='India'){
                cy.get(".suggestions a",{timeout:100000}).eq(index).click()
            }

        })

        //seclect i agree check box
        purchasePage.getIAgreeCheckBox().click()

        //click on burchase button
        purchasePage.getPurchaseButton().click()

        //validate success message
        purchasePage.getSuccessMessage().then(function(el){

            expect(el.text()).to.contain("Success")
        })


    })



})