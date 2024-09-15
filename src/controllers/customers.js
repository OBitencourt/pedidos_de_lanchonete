const CustomersModel = require('../models/customers')

async function signCustomers (req, res) {
    console.log(req.body)
}

async function listCustomers (req, res) {
    console.log(req.body)
}

async function getCustomer (req, res) {
    console.log(req.body)
}

async function updateCustomer (req, res) {
    console.log(req.body)
}

async function deleteCustomer (req, res) {
    console.log(req.body)
}





module.exports = {
    signCustomers,
    listCustomers,
    getCustomer,
    updateCustomer,
    deleteCustomer
}