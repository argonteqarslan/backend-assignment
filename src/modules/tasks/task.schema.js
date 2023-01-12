const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: "",
        },
        description: {
            type: String,
            default: "",
        },
    }, { timestamps: true }
)

module.exports = mongoose.model("Task", taskSchema);
