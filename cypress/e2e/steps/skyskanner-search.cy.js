/// <reference types="Cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"
import SkyscannerResultsPage from "../../support/pages/skyscanner-results-page"

When('user fills his flight informations', () => {
    SkyscannerHomePage.acceptCookies()  
    SkyscannerHomePage.checkDirectFlight()
    SkyscannerHomePage.checkOneWayFlignt()
    SkyscannerHomePage.setDeparture()
    SkyscannerHomePage.setArrival()
    SkyscannerHomePage.setDate()
    SkyscannerHomePage.setTravellersNumber()
    SkyscannerHomePage.clickSearchButton()
})
Then('all displayed flights are direct flights and form {string} to {string}', (departure, arrival) => {
    SkyscannerHomePage.acceptCookies()
    SkyscannerResultsPage.verifyDirectDisplay() 
    SkyscannerResultsPage.verifyDisplayDeparture(departure)
    SkyscannerResultsPage.verifyDisplayArrival(arrival)
    SkyscannerResultsPage.verifyTravellersNumber()
})