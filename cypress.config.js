const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor")
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin
const fs = require("fs-extra");
const path = require("path");
const fetchConfigurationByFile = file => {
const pathOfConfigurationFile = `config/cypress.${file}.json`;
  return (
    file && fs.readJson(path.join(__dirname, "../", pathOfConfigurationFile))
  );
};
module.exports = (on, config) => {
  const environment = config.env.configFile || "production";
  const configurationForEnvironment = fetchConfigurationByFile(environment);
  return configurationForEnvironment || config;
};
async function setupNodeEvents(on, config) {
  // implement node event listeners here
  const bundler = createBundler({
    plugins: [createEsBuildPlugin(config)],
  });
  on('file:preprocessor', bundler);
  await addCucumberPreprocessorPlugin(on, config);
  return config;
}
module.exports = defineConfig({
  projectId: '5akadq',
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  reporter: "mochawesome",
  reporterOptions: {
    "reportDir": "cypress/reports",
    "toConsole": true,
    "charts": true,
    "reportPageTitle": "Skyscanner Test Suite",
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "overwrite": true,
    "html": true,
    "json": false,
  },
  "video": false,
  "screenshotOnRunFailure": false,
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/**/*.{feature,features}",
  },
});
