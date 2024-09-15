
// requisitions-base
const express = require('express')
const cors = require('cors')

// requisitions created

const routes = require('./routes/routes')

const app = express()



// configuring cors to make everyone able to do requests

app.use(cors())


// configuring server to receive datas in json

app.use(express.json())


// configuring routes


app.use('/lanchonete', routes)


// 404 error (not found)

app.use('/', (req, res) => {
    res.send('Página não encontrada!')
})


// server listening

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Server is listening on port ${port}`))