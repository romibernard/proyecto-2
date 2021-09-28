const mongoose = require ("mongoose")

const flightSchema = mongoose.Schema({
    date: {
        type: Number,
        required: [true, "Por favor ingresa una fecha"],
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "airports"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "airports"
    },
    kind: String, //local, ruta, toque y despegues
    plate: {
        type: String,
        required: [true, "Ingresa una matrícula."],
        uppercase: true
    },
    model: {
        type: String,
        required: true,
        uppercase: true
    },
    timeH: {
        type: Number,
        required: [true, "Ingresa las HORAS del vuelo"]
        },
    timeM: {
        type: Number,
        required: [true, "Ingresa los MINUTOS del vuelo"]
        },
    plus: { //vfr, ifr, nocturna
        type: String,
        required: [true, "Selecciona las condiciones del vuelo"]
    }
})

// modelo
const Flight = mongoose.model("flights", flightSchema)

// exportación
module.exports = Flight