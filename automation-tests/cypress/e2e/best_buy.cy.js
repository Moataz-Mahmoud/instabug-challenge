describe('products test cases', () => {
  const env = Cypress.env()

  context('check that user can get all the products', () => {
    it('get all products', () => {
      cy.request({
        url: '/products',
        method: 'GET',
      }).then((response) => {
        expect(response.status).to.eq(200)
        env.products.total = response.body.total
        cy.log('Total number of products: ' + env.products.total)
      })
    })
  })

  context('check that user can create a product', () => {
    it('create the product', () => {
      cy.request({
        url: '/products',
        method: 'POST', 
        body: {
          name: env.products.product.name,
          type: env.products.product.type,
          price: env.products.product.price,
          shipping: env.products.product.shipping,
          upc: env.products.product.upc,
          description: env.products.product.description,
          manufacturer: env.products.product.manufacturer,
          model: env.products.product.model,
          url: env.products.product.url,
          image: env.products.product.image,
        }
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.name).to.eq(env.products.product.name)
        expect(response.body.type).to.eq(env.products.product.type)
        expect(response.body.price).to.eq(env.products.product.price)
        expect(response.body.shipping).to.eq(env.products.product.shipping)
        expect(response.body.upc).to.eq(env.products.product.upc)
        expect(response.body.description).to.eq(env.products.product.description)
        expect(response.body.manufacturer).to.eq(env.products.product.manufacturer)
        expect(response.body.model).to.eq(env.products.product.model)
        expect(response.body.url).to.eq(env.products.product.url)
        expect(response.body.image).to.eq(env.products.product.image)
        env.products.product.id = response.body.id
        cy.log('Newly created product id: ' + env.products.product.id)
      })
    })

    it('check that created product saved correctly', () => {
      cy.request({
        url: '/products',
        method: 'GET',
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(++env.products.total).to.eq(response.body.total)
      })
    })
  })

  context('check that user can get a specific product by id', () => {
    it('get product by id', () => {
      cy.request({
        url: `/products/${env.products.product.id}`,
        method: 'GET',
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(env.products.product.name)
      })
    })
  })

  context('check that user can update a product details', () => {
    it('update product', () => {
      cy.request({
        url: `/products/${env.products.product.id}`,
        method: 'PATCH',
        body: {
          name: env.products.updated_product.name,
          type: env.products.updated_product.type,
          price: env.products.updated_product.price,
          shipping: env.products.updated_product.shipping,
          upc: env.products.updated_product.upc,
          description: env.products.updated_product.description,
          manufacturer: env.products.updated_product.manufacturer,
          model: env.products.updated_product.model,
          url: env.products.updated_product.url,
          image: env.products.updated_product.image,
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.name).to.eq(env.products.updated_product.name)
        expect(response.body.type).to.eq(env.products.updated_product.type)
        expect(response.body.price).to.eq(env.products.updated_product.price)
        expect(response.body.shipping).to.eq(env.products.updated_product.shipping)
        expect(response.body.upc).to.eq(env.products.updated_product.upc)
        expect(response.body.description).to.eq(env.products.updated_product.description)
        expect(response.body.manufacturer).to.eq(env.products.updated_product.manufacturer)
        expect(response.body.model).to.eq(env.products.updated_product.model)
        expect(response.body.url).to.eq(env.products.updated_product.url)
        expect(response.body.image).to.eq(env.products.updated_product.image)
      })
    })
  })

  context('check that user can delete a product', () => {
    it('delete a product', () => {
      cy.request({
        url: `/products/${env.products.product.id}`,
        method: 'DELETE',
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })

    it('make sure that the product is deleted', () => {
      cy.request({
        url: '/products',
        method: 'GET',
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(--env.products.total).to.eq(response.body.total)
      })
    })
  })
})