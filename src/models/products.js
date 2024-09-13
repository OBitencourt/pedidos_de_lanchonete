const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    price: String,
})

const Model = mongoose.Model('products', schema)

module.exports = Model