const OrdersModel = require('../models/orders')

async function createOrder (req, res) {
    const { clienteId, produtos } = req.body

    const newOrder = await OrdersModel.create({
        clienteId,
        produtos
    })

    res.status(201).send({
        message: 'Pedido criado com sucesso',
        newOrder
    })
}

async function listOrders (req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : {}

    const orders = await OrdersModel.find(obj)
        .populate('clienteId', 'name')
        .populate('produtos.produtoId', 'name')
    
    res.send(orders)
}

async function updateOrderStatus (req, res) {
    


}

async function deleteOrder (req, res) {
    console.log(req.body)
}



module.exports = {
    createOrder,
    listOrders,
    updateOrderStatus,
    deleteOrder
}