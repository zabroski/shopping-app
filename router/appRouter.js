const express = require  ('express')
console.log(express)
const appRouter = express.Router()
const { passport } = require('../auth/auth')



app.get('/products/:id', async (req, res) => {
    let product = await Product.findByPk(req.params.id)
    res.send(product) //id, name, type, price as a product
})

app.post('/product/', async (req, res) => {
    try {

    }catch(e){
        console.log(e)
    }
})

app.put('/product/:id/edit', async (req, res) =>{
    let updateProduct = await Product.update(
        {
            name: req.body.name,
            type:  req.body.type,
            price: req.body.price
        },
        {
            where : {id: req.params.id}
        }
        
    )
    res.send(updateProduct)

})

function errorHandler (err, req, res, next){
    res.status(500)
    res.render('error', { error: err })
}


appRouter.get('/profile', passport.authenticate('jwt', { session: false}),
async(req, res) => {
    console.log(req.user)
    res.json({ user: req.user, message: 'authenticated'})
}
)

module.exports = appRouter