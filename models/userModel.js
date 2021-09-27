const mongoose = require("mongoose")

//schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Por favor, ingresa tu nombre."]
    },
    username: {
        type: String,
        required: [true, "Ingresa un usuario válido (minúsculas)."],
        unique: true,
        lowercase: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Ingresa un email válido."],
        unique: true
    },
    passwordHash: {
        type: String,
        required: [true, "Ingresa una contraseña válida."]
    }
})

// modelo
const User = mongoose.model("User", userSchema)

// exportación
module.exports = User