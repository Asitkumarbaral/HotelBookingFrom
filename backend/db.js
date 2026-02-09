import mongoose from "mongoose"
const mongoDb=mongoose.connect("mongodb+srv://dbname:dbpassword@cluster0.iw0ft5t.mongodb.net/dbname?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("error connecting to database",err)
})
export default mongoDb;
