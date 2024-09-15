const router = require('express').Router()

// import controllers

const CustomersControllers = require('../controllers/customers')
const ProductsControllers = require('../controllers/products')
const OrdersControllers = require('../controllers/orders')





// products

router.post('/products', ProductsControllers.createProduct) // create product (admin)

router.get('/products', ProductsControllers.listProducts) // list product
router.get('/products/:id', ProductsControllers.getProduct) // see one product details

router.put('/products/:id', ProductsControllers.updateProduct) // update product (admin)

router.delete('/products/:id', ProductsControllers.deleteProduct) // delete product (admin)


// orders

router.post('/orders', OrdersControllers.createOrder) // create order 

router.get('/orders', OrdersControllers.listOrders) // list all the orders (admin)
router.get('/orders/:id', OrdersControllers.getOrder) // see one order details

router.put('/orders/:id', OrdersControllers.updateOrderStatus) // update order status (admin)

router.delete('/orders/:id', OrdersControllers.deleteOrder) // delte order (admin)


// customers

router.post('/customers', CustomersControllers.signCustomers) // sign up of customers 

router.get('/customers', CustomersControllers.listCustomers) // list all customers 
router.get('/customers/:id', CustomersControllers.getCustomer) // see one customer details

router.put('/customers/:id', CustomersControllers.updateCustomer) // update customer (admin)


router.delete('/customers/:id', CustomersControllers.deleteCustomer) // delete customer (admin)



module.exports = router