const {Schema, model} = require('mongoose')

const schema = new Schema({
    parentId: { type: Number },
    imageUrl: { type: String },
    name: { type: String },
    category: { type: Number },
    price: { type: Number },
    count: 0
})

module.exports = model('Cart', schema)