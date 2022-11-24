import googleresult from "../selectors/google-results-page.selector"
class GoogleResults{
static getFirstLink(website){
    cy.get(googleresult.resultBody).find('a').first().should('contain',website)
}
static lanchWebSite()
{
    cy.get(googleresult.resultBody).find('a').first().click()
}
}export default GoogleResults