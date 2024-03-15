const mongoose = require("mongoose")

export const connectToDb = async()=>{

    const connection={}
    try{
        if(connection.isConnected){
            console.log("Using existing connection")
            return;
        }
        await mongoose.connect(process.env.MONGO)
        connection.isConnected = db.connections[0].readyState;
    }catch(err){
        console.log(error)
        throw new Error(error)
    }
}