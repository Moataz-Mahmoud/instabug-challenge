const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://www.facebook.com',
    defaultCommandTimeout: 60000,
  },

  env: {
    profile: {
      first_name: 'Ahmed',
      last_name: 'Mohammed',
      email: 'ahmed.mohammed@gmail.com',
      password: 'P@$$w0rd',
      birth_date: {
        day: '14',
        month: '6',
        year: '1994',
      },
      gender: 'Male',
    }
  }
});
