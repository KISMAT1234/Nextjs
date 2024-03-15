import  {User}  from "./models"
import  {connectToDb}  from "./utils"
export const getUser = async (id) =>{
    try{
        connectToDb();
        const user = await User.find();
        return user;
    }catch(err){
        console.log(err); 
        throw new Error("Failed to fetch users");
    }
}