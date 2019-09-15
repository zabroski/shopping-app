const express = require  ('express')
console.log(express)
const appRouter = express.Router()
const { passport } = require('../auth/auth');
const { Product, User } = require('../models');

appRouter.get('/product', async (req, res) => {
  res.send(await Product.findAll());
})

appRouter.get('/:userId/my-product', async (req, res) => {
  res.send(await Product.findAll({
    where: {
        'userId': req.params.userId
    },
    include: [
        {model: User}
    ]
}));
})

appRouter.get('/product/:id', async (req, res) => {
  let product = await Product.findByPk(req.params.id)
  res.send(product) 
})

appRouter.post('/:userId/product', async (req, res) => {
  
    try {
      let productData = req.body;
      productData["userId"] = req.params.userId;

      const product = await Product.create(productData);
      res.send(product)
  
    } catch(e) {
      console.log(e)
    }
    
  })

  appRouter.put('/product/user/:user_id/update/:product_id', async (req, res) => {
    let product = await Product.findByPk(req.params.product_id)

    await product.update(req.body)
    res.send(product)
  })
  

 appRouter.delete('/product/:id/delete', async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
          await product.destroy();
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