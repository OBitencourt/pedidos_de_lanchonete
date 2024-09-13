const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    tel: String,
    adress: String,
})

const Model = mongoose.Model('costumers', schema)

module.exports = Model