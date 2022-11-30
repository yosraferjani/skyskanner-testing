import skyResult from "../selectors/skyskanner-results-page.selector"

class SkyscannerResultsPage {
    static verifyDirectCheckbox() {
        cy.get(skyResult.directCheckbox).should('be.checked')
    }
    static verifyDirectDisplay() {
        cy.getFlightType().then((type => {
            cy.get(skyResult.directField).each(($element) => {
                let flightType = $element.text()
                expect(flightType).to.equal(type)
            })
        })
        )
    }
    static verifyDepartureField() {
        cy.getFlightDeparture().then((departure => {
            cy.get(skyResult.destinationField).each(($element) => {
                let flightDeparture = $element.text()
                expect(flightType).to.equal(departure)
            })
        }))
    }
} export default SkyscannerResultsPage