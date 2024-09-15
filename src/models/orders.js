const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    clienteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'costumers',
        required: true
    },
    
    produtos: [
        {
            produtoId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true
            },
            quantidade: {

            }
        }
    ],
    creationDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pendente', 'Em preparo', 'Em entrega', 'Entregue', 'Cancelado'],
        default: 'Pendente'
    }
})

const Model = mongoose.model('orders', schema)

module.exports = Model