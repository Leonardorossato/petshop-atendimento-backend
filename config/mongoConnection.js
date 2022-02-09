const mongoose = require('mongoose');
require('dotenv').config()
const mongoUrl = process.env.mongoUrl

mongoose.connect(mongoUrl).then(()=> {
    console.log('Connecting with mongoDB Ok')
}).catch(err => {
    console.log('Error connecting to mongoDB' +err)
})