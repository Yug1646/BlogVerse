const mongoose = require('mongoose')

const mongo_url = process.env.MONGO_URL
require('dotenv').config()

mongoose.connect(mongo_url)
.then(()=>{
    console.log('Mongodb Connected');
}).catch((err)=>{
    console.log('Mongodb connection error : ',err);
})