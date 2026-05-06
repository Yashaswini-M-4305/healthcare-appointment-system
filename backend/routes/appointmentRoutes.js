const express = require("express");

const router = express.Router();

const {
    bookAppointment,
    cancelAppointment,
    rescheduleAppointment,
    completeAppointment,
    rateDoctor

} = require("../controllers/appointmentController");

router.post("/", bookAppointment);

router.patch("/:id/cancel", cancelAppointment);

router.patch("/:id/reschedule", rescheduleAppointment);

router.patch("/:id/complete", completeAppointment);
router.patch("/:id/rate", rateDoctor);

module.exports = router;