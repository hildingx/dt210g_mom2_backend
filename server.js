require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Anslut till MongoDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => console.log("MongoDB ansluten"))
    .catch(err => console.error("MongoDB fel:", err));

// Använd routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/todos", todoRoutes);

app.listen(PORT, () => console.log(`Servern kör på port ${PORT}`));