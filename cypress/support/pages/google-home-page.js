import googleHome from "../selectors/google-home-page.selector"

class GoogleHome {
    static searchField() {
        cy.get(googleHome.searchField)
    }
    static verifySearchFieldDidplay() {
        cy.get(googleHome.searchField).should('be.visible')
    }
    static searchButton() {
        cy.get(googleHome.searchButton)
    }
    static typeText(text) {
        cy.get(googleHome.searchField).clear().type(text + '{enter}')
    }

    static refuseCookies() {
        cy.get("body").then(($body) => {
            if ($body.find(googleHome.cookiesBanner)) {
                cy.get(googleHome.refuseButton).click();
            }
        })
    }
} export default GoogleHome