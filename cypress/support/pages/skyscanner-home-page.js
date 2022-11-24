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
  static dismissCookies() {
    cy.get("body").then(($body) => {
      if ($body.find(".cookie-banner-root")) {
        cy.get(skyHome.okButton).click();
      }
    });
  }
static checkOneWayFlignt(){
    cy.get(skyHome.oneWayButton).click({force: true} )
}
static clickSearchButton(){
    cy.get(skyHome.searchFlightButton).click()
}


}
export default SkyscannerHomePage;
