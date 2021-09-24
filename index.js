const express           = require("express")
const app               = express()
const hbs               = require("hbs")

const connectingDB      = require("./config/db")

require("dotenv").config()


connectingDB()

app.use(express.static(__dirname + "/public"))

app.set("view engine", "hbs")

app.use(express.urlencoded({extended: true}))

require("./config/session.config")(app)
/*
app.use((req, res, next) => {
        //locals permite leer un valor específico (currentUser)
    res.locals.currentUser = req.session.currentUser
    next()

})
*/

app.use("/auth", require("./routes/auth.routes"))
app.use("/user", require("./routes/user.routes"))

app.get("/", (req, res) => {
    res.render("index")
})



app.listen(process.env.PORT, () => {
    console.log(`Svr activado: ${process.env.PORT}`)
    return
})
