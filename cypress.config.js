const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  video: true, 
  videoCompression: 32,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
