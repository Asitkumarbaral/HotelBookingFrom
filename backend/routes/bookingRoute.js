import { Router } from "express";
const router = Router();

import { createBooking } from "../controllers/bookingController.js";
import bookingValidationRules from "../validator/bookingvalidator.js"

router.post("/book", bookingValidationRules, createBooking);

export default router;
