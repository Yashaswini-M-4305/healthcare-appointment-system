const express = require("express");

const router = express.Router();

const {
    getAllDoctors,
    addDoctor
} = require("../controllers/doctorController");
const {
    protect,
    adminOnly
} = require("../middleware/authMiddleware");

router.get("/", getAllDoctors);
router.post(
    "/",
    protect,
    adminOnly,
    addDoctor
);

module.exports = router;