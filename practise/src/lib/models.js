const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}

})

export const user = mongoose.models.User || mongoose.model("User",userSchema )
