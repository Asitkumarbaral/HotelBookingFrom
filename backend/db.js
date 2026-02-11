import mongoose from "mongoose"
import "dotenv/config";
const mongoDb=mongoose.connect(process.env.MONGODB_URI
).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("error connecting to database",err)
})
export default mongoDb;
