import flight from "../../fixtures/flignt-informations.json";
import website from "../../fixtures/skyskanner.json";
import skyHome from "../selectors/skyscanner-home-page.selector";
import DateUtils from "./date-utils";


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
    });
  }
  static checkOneWayFlignt() {
    cy.get(skyHome.oneWayButton).click({ force: true })
  }
  static clickSearchButton() {
    cy.get(skyHome.searchFlightButton).click()
  }
  static setDeparture() {
    cy.fixture("flignt-informations").then((flight) => {
      cy.get(skyHome.departureField).clear().type(flight.departure + '{enter}', { force: true })
    })
  }
  static setArrival() {
    // to do 
  }
  static clickCalendar() {
    cy.get(skyHome.departDateField).click({ force: true })
  }

  static setDate() {

    this.clickCalendar()
    // en cours de test
    cy.get(skyHome.calenderInput).select('janvier 2023')

    cy.getFlightDate().then((date) => {
      cy.log(date)
      var month = DateUtils.getMonth(date)
      var day = DateUtils.getDay(date)
      cy.log("the month" + month)
      cy.log("the day " + day)
    })
  }
  static checkDirectFlight() {
    cy.xpath(skyHome.directFlight).click()
  }
  static clickTravellersList() {
    cy.get(skyHome.clickTravelersList).click()
  }

  static setTravellersNumber() {
    cy.getTravellersRequiredNumber().then(rqNumber => {
      cy.getTravellersDisplayedNumber().then(dspNumber => {
        cy.wrap({ required: rqNumber, display: dspNumber })
      })
    })

    // Cypress.Commands.add('getRequiredNumber')
    // Cypress.Commands.add('getDisplayNumber')
    // var requiredNumber = cy.getRequiredNumber()
    // var requiredNumber =cy.somme().then(value=>{
    //  cy.log(value + ' ici value')
    // })
    // var displayedNumber = this.getDisplayNumber()
    // cy.fixture("flignt-informations").then((flight) => {
    //  requiredNumber = flight.travelersNamber
    //  cy.log(requiredNumber)
    // })
    // cy.get(skyHome.travelersDropList).then(($span) => {
    //   displayedNumber = parseInt(($span.text()).substring(0, 1))
    //   cy.log(displayedNumber)
    //  })
    // cy.log('ici' +  requiredNumber)
    //cy.log('ici '   + displayedNumber)
    // if (requiredNumber != displayedNumber) {
    //   cy.log("We should configure traveles number")
    //   cy.get(skyHome.travelersDropList).click()
    //   while (displayedNumber <= requiredNumber) {
    //     cy.xpath(skyHome.countButton).first().click()
    //     displayedNumber++
    //   }
    // }
    // else {
    //   cy.log("travelers number is well set")
    // }
  }
}
export default SkyscannerHomePage
