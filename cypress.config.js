const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Projede kullandığınız port numarasına göre güncelleyin
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
