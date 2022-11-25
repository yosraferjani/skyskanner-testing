/// <reference types="Cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor"
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"

When('user fills his flight informations', () => {
    SkyscannerHomePage.checkDirectFlight()
    SkyscannerHomePage.checkOneWayFlignt()
    SkyscannerHomePage.setTravelersNumber()
    SkyscannerHomePage.clickSearchButton()
})

Then('all displayed flights are direct flights and form "ORY" to "TNG"', () => {
    // to do 
})