// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Command to lanch the google browser 
import skyHome from "./selectors/skyscanner-home-page.selector";

Cypress.Commands.add('lanchGoogle',()=>{
  const URL = Cypress.env("BASE_URL");
    cy.visit(URL)
    cy.url().should("include",URL);
})
Cypress.Commands.add('getTravellersDisplayedNumber',()=>{
  cy.get(skyHome.travelersDropList).then(($span) => {
   cy.wrap(parseInt(($span.text()).substring(0, 1)))
})
})

// return the requiered number of travellers for the flight 
Cypress.Commands.add('getTravellersRequiredNumber',()=>{
   cy.fixture("flignt-informations").then((flight) => {
      cy.wrap(flight.travelersNamber)
    })
})

// return the date of the flight
Cypress.Commands.add('getFlightDate',()=>{
  cy.fixture("flignt-informations").then((flight) => {
     cy.wrap(flight.date)
   })
})
 
