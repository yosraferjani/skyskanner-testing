/// <reference types="Cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"
import SkyscannerResultsPage from "../../support/pages/skyscanner-results-page"

When('user fills his flight informations', () => {
    SkyscannerHomePage.acceptCookies()
    SkyscannerHomePage.checkDirectFlight()
    SkyscannerHomePage.checkOneWayFlignt()
    SkyscannerHomePage.setTravellersNumber()
    SkyscannerHomePage.setDeparture()
    SkyscannerHomePage.setArrival()
    SkyscannerHomePage.setDate()
    SkyscannerHomePage.clickSearchButton()
})

Then('all displayed flights are direct flights and form "ORY" to "TNG"', () => {
    SkyscannerResultsPage.verifyDirectCheckbox()
    SkyscannerResultsPage.verifyDirectDisplay()
    SkyscannerResultsPage.verifyDepartureField()
})