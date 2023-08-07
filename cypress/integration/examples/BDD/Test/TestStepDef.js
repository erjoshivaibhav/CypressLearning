import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

import HomePage from "../../../pages/homePage"
import ProductsPage from "../../../pages/productsPage"
import CartPage from "../../../pages/cartPage"
import PurchasePage from "../../../pages/purchasePage"

const homePage=new HomePage
const productsPage = new ProductsPage
const cartPage = new CartPage
const purchasePage = new PurchasePage


Given('I open the application',function (){
    cy.visit(Cypress.env("baseurl")+"/angularpractice/")
})

//When I add products into the cart
When('I add products into the cart',function(){
    //click on shop link to go to products page
    homePage.getShopPageLink().click()
    //4. Add Multiple product to cart
    this.data.products.forEach(function(product){

        cy.addProduct(product)

    })

})

When('I place the order',function(){

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


})

Then('I validate success message',function(){

    //validate success message
    purchasePage.getSuccessMessage().then(function(el){

        expect(el.text()).to.contain("Success")
    })

})

