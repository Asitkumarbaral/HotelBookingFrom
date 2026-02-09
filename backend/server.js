import express from "express";
import mongoDb from "./db.js";          
 
import bookingRoute from "./routes/bookingRoute.js";

const PORT = your port;


const app = express();
 mongoDb;
app.use(express.json());
app.use(bookingRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 

