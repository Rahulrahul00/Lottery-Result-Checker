const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    ticketNumber: {type: String, required: true, unique: true},
    isWinner: { type: Boolean, default: false},
});

module.exports = mongoose.model("Ticket", ticketSchema,"myResult");