const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");
dotenv.config();

const app = express();
app.use(express.json());
connectDB();
app.use("/api/doctors", doctorRoutes);
app.get("/", (req, res) => {
    res.send("Backend Working Successfully");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});