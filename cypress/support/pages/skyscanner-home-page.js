import flight from "../../fixtures/flignt-informations.json";
import website from "../../fixtures/skyskanner.json";
import skyHome from "../selectors/skyscanner-home-page.selector";
import DateUtils from "./date-utils";
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

class SkyscannerHomePage {
  static verifySkyscannerHomePage() {
    cy.fixture("skyskanner").then((website) => {
      cy.url().should("contain", website.url);
    });
  }
  static verifyHeading() {
    cy.get(skyHome.header).should("be.visible");
  }
  static verifyCookiesDisplay() {
    cy.get(skyHome.cookieContent).should("be.visible");
  }
  static verifyDepartureField() {
    cy.get(skyHome.departureField).should("be.visible");
  }
  static verifyArrivalField() {
    cy.get(skyHome.arrivalField).should("be.visible");
  }
  static verifySearchFlightButton() {
    cy.get(skyHome.searchFlightButton).should("be.visible");
  }
  static acceptCookies() {
    cy.get("body").then(($body) => {
      if ($body.find(skyHome.cookiesBanner)) {
        cy.get(skyHome.okButton).click({ force: true });
      }
    })
  }
  static checkOneWayFlignt() {
    cy.get(skyHome.oneWayButton).click({ force: true })
  }
  static checkDirectFlight() {
    cy.xpath(skyHome.directFlight).click()
  }
  static clickSearchButton() {
    cy.get(skyHome.searchFlightButton).click()
  }
  static clickTravellersList() {
    cy.get(skyHome.clickTravelersList).click()
  }
  static clickCalendar() {
    cy.get(skyHome.departDateField).click({ force: true })
  }
  static setDate() {
    this.clickCalendar()
    cy.getFlightDate().then((date) => {
      var day = DateUtils.getDay(date)
      var month = DateUtils.getMonth(date)
      var fullDate = day + ' ' + month
      cy.get(skyHome.calenderInput).select(month)
      cy.get('button[aria-label*="' + fullDate + '"]').click()
    })
  }
  static setDeparture() {
    cy.fixture("flignt-informations").then((flight) => {
      cy.get(skyHome.departureField).clear().type(flight.departure + '{enter}', { force: true })
    })
  }
  static setArrival() {
    cy.fixture("flignt-informations").then((flight) => {
      cy.get(skyHome.arrivalField).clear().type(flight.arrival + '{enter}')
    })
  }
  static setNumber(requiredNumber) {
    cy.getTravellersDisplayedNumber().then(displayNumber => {
      if (displayNumber < requiredNumber) {
       cy.xpath(skyHome.increaseButton).first().click()
        this.setNumber(requiredNumber)
      }
      if (displayNumber > requiredNumber) {
      cy.xpath( decreaseButton).first().click()
        this.setNumber(requiredNumber)
      }
    })
  }
  static setTravellersNumber() {
    cy.get(skyHome.travelersDropList).click()
    cy.getTravellersRequiredNumber().then(value => {
      this.setNumber(value)
    })
  }
}
export default SkyscannerHomePage
