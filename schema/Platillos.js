const mongoose = require("mongoose");

const PlatillosSchema = new mongoose.Schema({
    slugmongo: String,
    precio: Number,
    detalles: String
});

const Platillo = mongoose.model("Platillo", PlatillosSchema);

module.exports = Platillo;