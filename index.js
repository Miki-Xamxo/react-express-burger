const express = require('express')
const mongoose = require("mongoose")


const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({extended: true}))
app.use('/api/cart', require('./routes/cart.route'))

async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ojrqf.mongodb.net/products?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })

        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT} `)
        })
    } catch (e) {
        console.log(e)
    }
}

start()