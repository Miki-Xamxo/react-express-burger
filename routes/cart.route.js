const { Router } = require('express')
const router = Router()
const Cart = require('../modals/Cart')


router.post('/add', async (req, res) => {
    try{
        const { parentId, name, imageUrl, category, price } = req.body

        const cart = new Cart({
            parentId, name, imageUrl, category, price, count: 1
        })

        await cart.save()
        res.json(cart)

    }catch(error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try{
        const cartItems = await Cart.find()
        res.json(cartItems)
    }catch(error){
        console.log(error)
    }
})

router.put('/add/:id', async (req, res) => {
    try{
        const items = await Cart.findOne({ parentId: req.params.id})
        items.count = items.count + 1

        await items.save()
        res.json(items)
    }catch(error){
        console.log(error)
    }
})


router.put('/remove/:id', async (req, res) => {
    try{
        const items = await Cart.findOne({ parentId: req.params.id})
        items.count = items.count - 1

        await items.save()
        res.json(items)
    }catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try{
        const cartItems = await Cart.findOneAndDelete({parentId: req.params.id})
        res.json(cartItems)
    }catch(error){
        console.log(error)
    }
})

router.delete('/delete', async (req, res) => {
    try{
        const cartItems = await Cart.remove({})
        res.json(cartItems)
    }catch(error){
        console.log(error)
    }
})

module.exports = router