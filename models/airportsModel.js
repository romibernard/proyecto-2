const mongoose = require ("mongoose")

const airportsSchema = mongoose.Schema({
    codeOACI: {
        type: String,
        uppercase: true
    },
    name: {
        type: String,
        required: true
    }
})

// modelo
const Airports = mongoose.model("airports", airportsSchema)

// exportación
module.exports = Airports

