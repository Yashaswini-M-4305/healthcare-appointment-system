const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

const bookAppointment = async (req, res) => {

    try {

        const {
            patientName,
            doctorId,
            appointmentDate,
            slot
        } = req.body;

        // Check if doctor exists
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({
                message: "Doctor not found"
            });
        }

        // Check if slot is available
        if (!doctor.availableSlots.includes(slot)) {
            return res.status(400).json({
                message: "Slot not available"
            });
        }

        // Create appointment
        const appointment = await Appointment.create({
            patientName,
            doctor: doctorId,
            appointmentDate,
            slot
        });

        // Remove booked slot
        doctor.availableSlots =
            doctor.availableSlots.filter(
                (s) => s !== slot
            );

        await doctor.save();

        res.status(201).json({
            message: "Appointment booked successfully",
            appointment
        });

    }
    catch (error) {

    console.log(error);

    res.status(500).json({
        message: error.message
    });

}
};

const cancelAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        // Prevent cancelling twice
        if (appointment.status === "cancelled") {
            return res.status(400).json({
                message: "Appointment already cancelled"
            });
        }

        // Find doctor
        const doctor = await Doctor.findById(appointment.doctor);

        // Return slot back to availability
        doctor.availableSlots.push(appointment.slot);

        await doctor.save();

        // Update appointment status
        appointment.status = "cancelled";

        await appointment.save();

        res.status(200).json({
            message: "Appointment cancelled successfully"
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error cancelling appointment"
        });

    }
};
const rescheduleAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        // Prevent rescheduling cancelled appointments
        if (appointment.status === "cancelled") {
            return res.status(400).json({
                message: "Cannot reschedule cancelled appointment"
            });
        }

        const doctor = await Doctor.findById(appointment.doctor);

        const { newDate, newSlot } = req.body;

        // Check if new slot is available
        if (!doctor.availableSlots.includes(newSlot)) {
            return res.status(400).json({
                message: "New slot not available"
            });
        }

        // Return old slot back
        doctor.availableSlots.push(appointment.slot);

        // Remove new slot
        doctor.availableSlots =
            doctor.availableSlots.filter(
                (slot) => slot !== newSlot
            );

        await doctor.save();

        // Update appointment
        appointment.appointmentDate = newDate;
        appointment.slot = newSlot;

        await appointment.save();

        res.status(200).json({
            message: "Appointment rescheduled successfully",
            appointment
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error rescheduling appointment"
        });

    }
};
const completeAppointment = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        // Prevent completing cancelled appointments
        if (appointment.status === "cancelled") {
            return res.status(400).json({
                message: "Cancelled appointment cannot be completed"
            });
        }

        // Prevent duplicate completion
        if (appointment.status === "completed") {
            return res.status(400).json({
                message: "Appointment already completed"
            });
        }

        appointment.status = "completed";

        await appointment.save();

        res.status(200).json({
            message: "Appointment marked as completed",
            appointment
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error completing appointment"
        });

    }
};
const rateDoctor = async (req, res) => {

    try {

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                message: "Appointment not found"
            });
        }

        // Only completed appointments can rate
        if (appointment.status !== "completed") {
            return res.status(400).json({
                message: "Only completed appointments can rate doctors"
            });
        }

        const doctor = await Doctor.findById(appointment.doctor);

        const { rating } = req.body;

        // Add new rating
        doctor.ratings.push(rating);

        // Calculate average
        const total =
            doctor.ratings.reduce(
                (sum, num) => sum + num,
                0
            );

        doctor.averageRating =
            total / doctor.ratings.length;

        await doctor.save();

        res.status(200).json({
            message: "Doctor rated successfully",
            averageRating: doctor.averageRating
        });

    }
    catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error rating doctor"
        });

    }
};
module.exports = {
    bookAppointment,
    cancelAppointment,
    rescheduleAppointment,
    completeAppointment,
    rateDoctor
};
