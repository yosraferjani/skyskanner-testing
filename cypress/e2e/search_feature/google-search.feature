Feature: Search for a flight on the website Skyskanner

  Scenario: Search skyscanner
    Given user is on the "Google" website
    When user searchs for "Skyscanner"
    Then the "Skyscanner" website is displayed at the top of the search results

  Scenario: Lanch skyscanner
    When user clicks on the website link
    Then user is redirect to skyscanner

  Scenario: Search flight
    When user fills his flight informations
   When clicks on the serach button
    Then tt
