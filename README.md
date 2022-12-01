# Skyscanner Testing

E2E test suite using Cypress for the website Skyscanner

### Prerequisites

To get started with Skyscanner Testing you will need:

* [Cypress](https://www.cypress.io//) - V10.11.0
* cypress-cucumber-preprocessor
* Mochawesome 
* [cypress-xpath](https://github.com/cypress-io/cypress/tree/develop/npm/xpath)
* NPM
* Javascript
* VScode
* Jenkins

### Application under test

[skyscanner](https://https://www.skyscanner.fr/) 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/yosraferjani/skyskanner-testing.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

### Run application

#### Run locally 

```sh
npm run cy:open
```

#### Run en mode headless

```sh
npm run cy:run
```

### Cypress Dashboard
[For more visibility of tests execution, you can visit the cypress dashboard](https://cloud.cypress.io/projects/5akadq/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D)


### Test reports
to do 


### CI/CD integration with Jenkins

to do


## Useful Links

* [How to configure cypress beyond version 10 with cucumber ](https://blog.emumba.com/getting-started-with-cypress-10-and-cucumber-6b43ff68633b) 

* Configure mochaawesome
[https://www.npmjs.com/package/cypress-mochawesome-reporter]
[https://kristijan-pajtasev.medium.com/cypress-merging-multiple-mochawesome-reports-3eb8fcaaf32c]
[https://dzone.com/articles/cypress-generate-html-results-with-screenshot]

* Run cypress tests in jenkins pipeline
 [https://www.lambdatest.com/blog/jenkins-and-cypress-tutorial/]
 [https://www.youtube.com/watch?v=RhBRFyLqxz0]