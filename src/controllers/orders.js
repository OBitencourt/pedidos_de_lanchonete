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
    const { id } = req.params
    const order = await OrdersModel.findOneAndUpdate({ _id: id}, req.body, {
        new: true,
        runValidators: true
    })

    res.send({
        message: 'Pedido atualizado com sucesso',
        order
    })
}

async function deleteOrder (req, res) {
    const { id } = req.params

    const remove = await OrdersModel.deleteOne({ _id: id})

    res.send({
        message: 'Produto excluído com sucesso',
        remove
    })
}



module.exports = {
    createOrder,
    listOrders,
    updateOrderStatus,
    deleteOrder
}