const CustomersModel = require('../models/customers')


// ALREADY MADE

async function signCustomers (req, res) {
    const {
        name, 
        email,
        tel,
        adress
    } = req.body

    const customer = new CustomersModel({
        name,
        email,
        tel,
        adress
    })

    const existingEmail = await CustomersModel.findOne({ email })
    const existingTel = await CustomersModel.findOne({ tel })

    if(existingEmail || existingTel) {
        return res.status(400).send({
            message:'Número ou email já cadastrado'
        })
    }

    await customer.save()


    res.send({
        message: 'sucess',
    })
}

async function listCustomers (req, res) {
    const  {id} = req.params

    let obj = id ? { _id: id } : {}

    const customers = await CustomersModel.find(obj)
    
    res.send(customers)
}

// TO DO


/* async function getCustomer (req, res) {
    console.log(req.body)
} */

async function updateCustomer (req, res) {
    console.log(req.body)
}

async function deleteCustomer (req, res) {
    console.log(req.body)
}





module.exports = {
    signCustomers,
    listCustomers,
    // getCustomer,
    updateCustomer,
    deleteCustomer
}