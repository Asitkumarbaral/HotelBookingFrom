import { body } from "express-validator";

const bookingValidationRules = [
  body("checkInDate")
  //body is not empty
    .notEmpty()
    .withMessage("Check-in date is required")
    //it is isoformat like 25/2/8
    .isISO8601()
    //convert to date to js  object for further use
    .toDate(),

  body("checkOutDate")
    .notEmpty()
    .withMessage("Check-out date is required")
    .isISO8601()
    .toDate(),

  body("roomType")
    .isIn(["Single", "Double", "Suite"])
    .withMessage("Invalid room type"),

  body("adults")
  //min 1 adult is required
    .isInt({ min: 1 })
    .withMessage("At least one adult is required"),

  body("children")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Children count cannot be negative")
];

export default bookingValidationRules;
