const ProductsModel = require('../models/products')

async function createProduct (req, res) {
    const {
        name,
        price
    } = req.body

    const product = new ProductsModel({
        name,
        price
    })

    product.save()

    res.send({
        message: "sucess",
        product
    })
}

async function listProducts (req, res) {
    const {id} = req.params

    let obj = id ? { _id: id } : {}

    const products = await ProductsModel.find(obj)

    res.send(products)
}


async function updateProduct (req, res) {
    const { id } = req.params

    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, {new: true, runValidators: true})

    res.send({
        message: 'sucess',
        product
    })
}

async function deleteProduct (req, res) {
    const { id } = req.params 

    const remove = await ProductsModel.deleteOne({ _id: id })

    let message = ''

    if(remove.deletedCount == 1) {
        message = 'sucess'
    } else {
        message = 'error'
    }
   
    res.send({
        message,
        remove,
    })
}


module.exports = {
    createProduct,
    listProducts,
    updateProduct,
    deleteProduct
}