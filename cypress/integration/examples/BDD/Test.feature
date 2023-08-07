Feature: Testing Ecommerce App

    @E2E
    Scenario: E2E
    Given I open the application
    When I add products into the cart
    When I place the order
    Then I validate success message
