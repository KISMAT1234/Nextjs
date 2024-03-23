import mongoose from "mongoose";


export async function connect(){
    try{
          mongoose.connect(process.env.MONGO_URI!)
          const connection = mongoose.connection

          connection.on('connected',()=>{
            console.log('MongoDB connected')
          })

          connection.on('error',(err)=>{
            console.log('MongoDB connection err'+ err);
            process.exit()
          })
    }
    catch(err){
        console.log('Something went wrong in DB')
        console.log(err)
    }
}