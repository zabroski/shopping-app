const express = require  ('express')
console.log(express)
const appRouter = express.Router()
const { passport } = require('../auth/auth');
const { Product } = require('../models');




// get one product

appRouter.get('/product/:id', async (req, res) => {
    let product = await Product.findByPk(req.params.id)
    res.send(product) //id, name, type, price as a product
})

appRouter.post('/product', async (req, res) => {
  
    try {
      const product = await Product.create(req.body);
      res.send(product)
  
    } catch(e) {
      console.log(e)
    }
    
  })

  // PUT(edit) one routine
  appRouter.put('/product/user/:user_id/update/:product_id', async (req, res) => {
    let product = await Product.findByPk(req.params.product_id)

    await product.update(req.body)
    res.send(product)
  })
  


 // DELETE routine
 appRouter.delete('/product/:id/delete', async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
          await product.destroy();

          console.log("This is my routine: ", product);
          res.send('ok')
      } else{
          let err = new Error('PRODUCT Not Found')
          res.status(400).send(err.toString())
      } 
  } catch(error) {
      throw error
  }
  });

appRouter.get('/profile', passport.authenticate('jwt', { session: false}),
async(req, res) => {
    console.log(req.user)
    res.json({ user: req.user, message: 'authenticated'})
}
)

module.exports = appRouter