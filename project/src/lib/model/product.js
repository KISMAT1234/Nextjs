import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    company:String,
})

 export const user = mongoose.models.users || mongoose.model("users", productSchema);

