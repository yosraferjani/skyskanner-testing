/// <reference types="Cypress" />
import { Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"

When('user fills his flight informations', () => {
    SkyscannerHomePage.dismissCookies()
    SkyscannerHomePage.checkOneWayFlignt()
})

When('clicks on the serach button', () => {
    SkyscannerHomePage.clickSearchButton()
})
