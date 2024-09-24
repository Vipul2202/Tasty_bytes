const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://aman44008:1X9HtBYBKwBJBVtc@cluster0.n21mx.mongodb.net/vipultaneja")
.then(obj=()=>{
    console.log("Connected to MongoDB");
}

)
.catch(err=()=>{
    console.log("error in db connection"+err)
}

)