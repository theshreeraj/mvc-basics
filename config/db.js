const mongoose = require("mongoose");


const connectDB = async ()=>{
    try{
      await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
        console.log('database connected successfully')
    }catch(err){
        console.log("error in connecting db", err)
    }
}


module.exports = connectDB;