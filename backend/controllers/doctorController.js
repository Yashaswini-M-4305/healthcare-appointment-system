const Doctor = require("../models/Doctor");

const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();

        res.status(200).json(doctors);
    } 
    catch (error) {
        res.status(500).json({
            message: "Error fetching doctors"
        });
    }
};

const addDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.create(req.body);

        res.status(201).json({
            message: "Doctor added successfully",
            doctor
        });
    } 
    catch (error) {
        res.status(500).json({
            message: "Error adding doctor"
        });
    }
};

module.exports = {
    getDoctors,
    addDoctor
};