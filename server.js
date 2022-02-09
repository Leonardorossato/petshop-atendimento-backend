const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoConnection = require('./config/mongoConnection')
const atendimentoRouter = require('./routes/atendimentoRouter')
const fornecedorRouter = require('./routes/fornecedorRouter')
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.mongoConnection = mongoConnection

app.use('/api', atendimentoRouter)
app.use('/api', fornecedorRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})