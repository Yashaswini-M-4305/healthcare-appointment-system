const express = require("express");

const router = express.Router();

const {
    getDoctors,
    addDoctor
} = require("../controllers/doctorController");

const {
    protect,
    adminOnly
} = require("../middleware/authMiddleware");

// Patients/admins can view doctors
router.get("/", protect, getDoctors);

// Only admins can add doctors
router.post(
    "/",
    protect,
    adminOnly,
    addDoctor
);

module.exports = router;