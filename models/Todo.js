const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    status: {
        type: String,
        enum: ["not started", "in progress", "completed"],
        default: "not started"
    }
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);