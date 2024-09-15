const ProductsModel = require('../models/products')

async function createProduct (req, res) {
    console.log(req.body)
}

async function listProducts (req, res) {
    console.log(req.body)
}

async function getProduct (req, res) {
    console.log(req.body)
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
    getProduct,
    updateProduct,
    deleteProduct
}