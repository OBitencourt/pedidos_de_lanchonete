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
    console.log(req.body)
}

async function deleteProduct (req, res) {
    console.log(req.body)
}


module.exports = {
    createProduct,
    listProducts,
    updateProduct,
    deleteProduct
}