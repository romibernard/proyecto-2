const mongoose = require ("mongoose")

const flightSchema = mongoose.Schema({
    date: {
        type: String,
        required: [true, "Por favor ingresa una fecha"],
    },
    time: {
        type: String,
    },
    from: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "airports"
    },
    to: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "airports"
    },
    kind:  {
        type: String,
        enum: ["LOCAL", "RUTA", "TOQUES Y DESPEGUES"],
        default: "LOCAL"
        },
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
        required: [true, "Selecciona las condiciones del vuelo"],
        enum: ["VFR", "IFR", "Nocturno"],
        default: "VFR"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})

// modelo
const Flight = mongoose.model("Flight", flightSchema)

// exportación
module.exports = Flight