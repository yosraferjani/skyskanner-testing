/// <reference types="Cypress" />
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import GoogleHome from "../../support/pages/google-home-page"
import GoogleResults from "../../support/pages/google-results-page"
import SkyscannerHomePage from "../../support/pages/skyscanner-home-page"

When('user searchs for {string}', (websiteName) => {
    GoogleHome.verifySearchFieldDidplay()
    GoogleHome.typeText(websiteName)
})
When('user clicks on the website link', () => {
    GoogleResults.lanchWebSite()
})
Then('the {string} website is displayed at the top of the search results', (websiteName) => {
    GoogleResults.getFirstLink(websiteName)

})
Then('user is redirect to skyscanner', () => {
    SkyscannerHomePage.verifySkyscannerHomePage()
    SkyscannerHomePage.verifyHeading()
    SkyscannerHomePage.verifyCookiesDisplay()
    SkyscannerHomePage.verifyDepartureField()
    SkyscannerHomePage.verifyArrivalField()
    SkyscannerHomePage.verifySearchFlightButton()
    SkyscannerHomePage.acceptCookies()
})