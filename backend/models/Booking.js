import { Schema, model } from "mongoose";

const bookingSchema = new Schema(
  {
    checkInDate: {
      type: Date,
      required: true
    },
    checkOutDate: {
      type: Date,
      required: true
    },
    roomType: {
      type: String,
      enum: ["Single", "Double", "Suite"],
      required: true
    },
    adults: {
      type: Number,
      required: true,
      min: 1
    },
    children: {
      type: Number,
      default: 0,
      min: 0
    },
    specialRequests: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

const Booking = model("Booking", bookingSchema);

export default Booking;
