const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  projectId: "5hrgw9",
  video: true,
  e2e: {
    //para que solo se muestren archivos feature/cucumber
    //specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
    },
    //para que se pueda utilizar el before en todos los it y que la pagina no se quede en blanco
    testIsolation: false,
  },

  pageLoadTimeout: 9000,
  defaultCommandTimeout: 15000,
});

