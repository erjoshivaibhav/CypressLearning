class HomePage
{

getNameTextBox()
{
    return cy.get("input[name='name']:nth-Child(2)")
}

getGenderDropdown()
{
    return cy.get("select[class='form-control']")
}

getTwoWayBindingTextBox()
{
    return cy.get("input[name='name']:nth-Child(1)")
}

getEnterpreneurRadioButton()
{
    return cy.get("#inlineRadio3")
}

getShopPageLink()
{
    return cy.get("a[href='/angularpractice/shop']")
}


}

export default HomePage;