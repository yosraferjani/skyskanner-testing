import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import GoogleHome from "../../support/pages/google-home-page"

Given('user is on the "Google" website', () => {
  cy.lanchGoogle()
  GoogleHome.refuseCookies()

});