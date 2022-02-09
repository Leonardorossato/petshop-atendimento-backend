const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const sequelize = require('./config/db')
const atendimentoRouter = require('./routes/atendimentoRouter')
const fornecedorRouter = require('./routes/fornecedorRouter')
require('dotenv').config()
const PORT = process.env.PORT

sequelize.sync().then(() => {
    console.log('Sqlite3 connection established Ok')
}).catch((error) => {
    console.error(error)
})

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api', atendimentoRouter)
app.use('/api', fornecedorRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})