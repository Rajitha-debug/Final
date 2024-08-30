const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // environment varaiables
  reporter: 'cypress-mochawesome-reporter',
  baseURl:" ",
  projectId: "onvx1f",
  env: {
    url: "https://rahulshettyacademy.com",
  },

  
 
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    specPattern:"cypress/Integrations/Ex/*.js"
  },
  
});
