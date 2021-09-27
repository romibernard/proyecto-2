const mongoose = require ("mongoose")

const connectingDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        return console.log("Conexión correcta a la base de datos.")
    } catch (e) {
        console.log(e)
    }
}

module.exports = connectingDB