import express from "express";
import mongoDb from "./db.js";          
import cors from "cors";
import bookingRoute from "./routes/bookingRoute.js";

const PORT = 5000;


const app = express();
 mongoDb;
app.use(express.json());
app.use(cors());
app.use("/api/bookings",bookingRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
 

