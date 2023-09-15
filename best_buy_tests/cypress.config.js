const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3030/',
  },

  env: {
    products: {
      product: {
        id: "",
        name: "name",
        type: "type",
        price: 123,
        shipping: 123,
        upc: "upc",
        description: "product",
        manufacturer: "manu",
        model: "model",
        url: "url",
        image: "image"
      },
      updated_product:{
        name: "updated name",
        type: "updated type",
        price: 456,
        shipping: 456,
        upc: "updated",
        description: "updated product",
        manufacturer: "updated",
        model: "updated",
        url: "updated",
        image: "updated"
      },
      total: 0,
    }
  }
});
