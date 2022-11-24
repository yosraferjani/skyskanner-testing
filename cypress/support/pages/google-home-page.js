import  home from "../selectors/google-home-page.selector"

class GoogleHome{
static searchField(){
     cy.get(home.searchField)
}
static verifySearchFieldDidplay(){
    cy.get(home.searchField).should('be.visible')
}
static searchButton(){
    cy.get(home.searchButton)
}
static typeText(text){
    cy.get(home.searchField).type(text+'{enter}')
}
} export default GoogleHome