const OrdersModel = require('../models/orders')

async function createOrder (req, res) {
    console.log(req.body)
}

async function listOrders (req, res) {
    console.log(req.body)
}

async function getOrder (req, res) {
    console.log(req.body)
}

async function updateOrderStatus (req, res) {
    console.log(req.body)
}

async function deleteOrder (req, res) {
    console.log(req.body)
}



module.exports = {
    createOrder,
    listOrders,
    getOrder,
    updateOrderStatus,
    deleteOrder
}