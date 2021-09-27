const mongoose = require ("mongoose")

const flightSchema = mongoose.Schema({
    date: {
        type: Number,
        required: [true, "Por favor ingresa una fecha"],
    },
    from: {
        type: Number,
        required: true
    },
    to: {
        type: Number,
        required: true 
    },
    kind: String, //local, ruta
    plate: {
        type: String,
        required: true,
        uppercase: true
    },
    model: {
        type: String,
        required: true,
        uppercase: true
    },
    time: {
        type: Number,
        required: true
    },
    plus: { //vfr, ifr, nocturna
        type: String,
        required: true
    }
})

// modelo
const Flight = mongoose.model("Flight", flightSchema)

// exportación
module.exports = Flight