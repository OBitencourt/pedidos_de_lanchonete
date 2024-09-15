const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    tel: {type: String, required: true, unique: true},
    adress: {type: String, required: true},
})

const CustomersModels = mongoose.model('costumers', customerSchema)

module.exports = CustomersModels