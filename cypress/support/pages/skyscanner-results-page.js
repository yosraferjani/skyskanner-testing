import skyResult from "../selectors/skyskanner-results-page.selector"
import flight from "../../fixtures/flignt-informations.json"
class SkyscannerResultsPage {
    static verifyDirectDisplay() {
        cy.fixture("flignt-informations").then((flight) => {
            cy.get(skyResult.directField).each(($element) => {
                let flightType = $element.text()
                expect(flightType).to.contain(flight.flightType)
            })
        })
    }
    static verifyDisplayDeparture(text) {
        cy.xpath(skyResult.departureDisplayText).invoke('text').then((text) => {
            expect(text).to.include(text)
        })
    }
    static verifyDisplayArrival(text) {
        cy.xpath(skyResult.arrivalDisplayText).invoke('text').then((text) => {
            expect(text).to.include(text)
        })
    }
    static successMessage() {
        cy.get(skyResult.successMessage).should('be.visible')
    }
    static verifyTravellersNumber() {
        cy.fixture("flignt-informations").then((flight) => {
            cy.get(skyResult.travellersNumber).invoke('text').then((text) => {
                expect(text).to.include(flight.travellersNamber)
            })
        })
    }
} export default SkyscannerResultsPage