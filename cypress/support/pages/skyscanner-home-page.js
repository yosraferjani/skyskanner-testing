import flight from "../../fixtures/flignt-informations.json";
import website from "../../fixtures/skyskanner.json";
import skyHome from "../selectors/skyscanner-home-page.selector";

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
        cy.get(skyHome.okButton).click();
      }
    });
  }
  static checkOneWayFlignt() {
    cy.get(skyHome.oneWayButton).click({ force: true })
  }
  static clickSearchButton() {
    cy.get(skyHome.searchFlightButton).click()
  }
  static clickdate() {
    cy.xpath(skyHome.departDateField).click()

  }
  static checkDirectFlight() {
    cy.xpath(skyHome.directFlight).click()
  }
  static clickTravelersList() {
    cy.get(skyHome.clickTravelersList).click()
  }

  static setTravelersNumber() {
    var requiredNumber = 0
    var displayedNumber = 0
    cy.fixture("flignt-informations").then((flight) => {
      requiredNumber = flight.travelersNamber
      cy.log(requiredNumber)
    })
    cy.get(skyHome.travelersDropList).then(($span) => {
      displayedNumber = parseInt(($span.text()).substring(0, 1))
      cy.log(displayedNumber)
    })

    if (requiredNumber != displayedNumber) {
      cy.log("We should configure traveles number")
      cy.get(skyHome.travelersDropList).click()
      var count = 1
      while (count <= requiredNumber) {
        cy.xpath(skyHome.countButton).click()
        count++
      }
    }
    else {
      cy.log("travelers number is well set")
    }
  }
}
export default SkyscannerHomePage
