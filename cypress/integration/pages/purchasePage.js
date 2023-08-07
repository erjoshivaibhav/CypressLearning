class PurchasePage
{

getCountrySuggestion()
{
    return cy.get("#country",{timeout:100000})
}

getIAgreeCheckBox()
{
    return cy.contains("I agree with the")
}

getPurchaseButton()
{
    return cy.get("input[type='Submit']")
}

getSuccessMessage()
{
    return cy.get('div strong')
}


}

export default PurchasePage;