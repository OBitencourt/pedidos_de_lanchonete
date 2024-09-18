const router = require('express').Router()

// IMPORT CONTROLLERS

const CustomersControllers = require('../controllers/customers')
const ProductsControllers = require('../controllers/products')
const OrdersControllers = require('../controllers/orders')

// CUSTOMERS

router.post('/customers', CustomersControllers.signCustomers) // sign up of customers 

router.get('/customers/:id?', CustomersControllers.listCustomers) // list all customers or one (admin)

router.put('/customers/:id', CustomersControllers.updateCustomer) // update customer (admin)
router.delete('/customers/:id', CustomersControllers.deleteCustomer) // delete customer (admin)

// PRODUCTS

router.post('/products', ProductsControllers.createProduct) // create product (admin) 

router.get('/products/:id?', ProductsControllers.listProducts) // list product

router.put('/products/:id', ProductsControllers.updateProduct) // update product (admin)

router.delete('/products/:id', ProductsControllers.deleteProduct) // delete product (admin)


// ORDERS

router.post('/orders', OrdersControllers.createOrder) // create order 

router.get('/orders', OrdersControllers.listOrders) // list all the orders (admin)

router.put('/orders/:id', OrdersControllers.updateOrderStatus) // update order status (admin)

router.delete('/orders/:id', OrdersControllers.deleteOrder) // delte order (admin)



module.exports = router