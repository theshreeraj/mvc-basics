const express = require("express");
const cors = require("cors");
const connectDB =  require("./config/db.js");
const productRouter = require("./routes/products.js")

const PORT = 8000;

const app = express();

// middlewares
app.use(express.json());
app.use(cors())

// database connection
connectDB();


app.get("/", (req,res)=>{
    res.send("Hello world")
})

// route - products

app.use("/products", productRouter)



app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})