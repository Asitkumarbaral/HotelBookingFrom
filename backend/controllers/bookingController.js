import { validationResult } from "express-validator";
import Booking from "../models/Booking.js";

const createBooking = async (req, res) => {
  try {
    // here we get all the error if we have 
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        //error is in the array format
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      checkInDate,
      checkOutDate,
      roomType,
      adults,
      children,
      specialRequests
    } = req.body;

    //  Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  //checkin date should not be less thet noww
    if (checkInDate < today) {
      return res.status(400).json({
        message: "Check-in date cannot be in the past"
      });
    }

    if (checkOutDate <= checkInDate) {
      return res.status(400).json({
        message: "Check-out date must be after check-in date"
      });
    }

    // save the data into booking
    const booking = new Booking({
      checkInDate,
      checkOutDate,
      roomType,
      adults,
      children,
      specialRequests
    });

    await booking.save();

    res.status(201).json({
      message: "Booking created successfully",
      booking
    });

  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};
export { createBooking };
