const express           = require("express")
const app               = express()
const hbs               = require("hbs")

const connectingDB      = require("./config/db")


// middleware
require("dotenv").config()

// mongodb base de datos
connectingDB()

app.use(express.static(__dirname + "/public"))
app.set("view engine", "hbs")
app.use(express.urlencoded({extended: true}))

// sesiones
require("./config/session.config")(app)

const createSession = require("./config/session.config")
createSession(app)

// Layout Middleware
app.use((req, res, next) => {
    res.locals.currentUser = req.session.currentUser
    next()

})

// Rutas
app.use("/user", require("./routes/user.routes"))
const auth = require("./routes/auth.routes");
app.use("/auth", auth);

app.get("/", (req, res) => {
    res.render("index") //render para hbs
})



app.listen(process.env.PORT, () => {    
    console.log(`Svr activado: ${process.env.PORT}`)
    return
})