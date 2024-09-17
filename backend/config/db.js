const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://aman44008:2609As@cluster0.4zxgm.mongodb.net/food")
.then(obj=()=>{
    console.log("Connected to MongoDB");
}

)
.catch(err=()=>{
    console.log("error in db connection"+err)
}

)