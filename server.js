const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/db')
const atendimentoController = require('./controllers/atendimentoController')
const fornecedoresController = require('./controllers/fornecedoresController')
require('dotenv').config()
const PORT = process.env.PORT

sequelize.sync().then(() => {
    console.log('Sqlite3 connection established Ok')
}).catch((error) => {
    console.error(error)
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', atendimentoController)
app.use('/api', fornecedoresController)

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})