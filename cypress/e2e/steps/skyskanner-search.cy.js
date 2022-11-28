/// <reference types="Cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"

When('user fills his flight informations', () => {
    cy.visit('www.skyscanner.fr/')
    SkyscannerHomePage.acceptCookies()
    SkyscannerHomePage.checkDirectFlight() 
    SkyscannerHomePage.checkOneWayFlignt() 
    SkyscannerHomePage.setTravellersNumber()
    SkyscannerHomePage.setDeparture()
    SkyscannerHomePage.setDate()
    SkyscannerHomePage.clickSearchButton()
})

Then('all displayed flights are direct flights and form "ORY" to "TNG"', () => {
    // to do 
})