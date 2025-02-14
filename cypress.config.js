const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
	  baseUrl: "http://localhost:8090/squash",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern: 'cypress/integration/**/*.js',
    video: false,
    //testIsolation: false
  },
});
