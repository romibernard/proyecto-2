const mongoose = require ("mongoose")

const flightSchema = mongoose.Schema({
    date: {
        type: Number,
        required: [true, "Por favor ingresa una fecha"],
    }
})