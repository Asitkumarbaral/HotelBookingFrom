import mongoose from "mongoose"
const mongoDb=mongoose.connect("mongodb+srv://asitkumarbaral:Asit1234@cluster0.iw0ft5t.mongodb.net/imagify1?retryWrites=true&w=majority&appName=Cluster0"
).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log("error connecting to database",err)
})
export default mongoDb;