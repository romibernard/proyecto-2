const session = require("express-session")
const MongoStore = require("connect-mongo")

const createSession = (app) => {
    app.set("trust proxy", 1)
    app.use(
        session({
            secret: process.env.SECRET,
            resave: true,
            saveUninitialized: false,
            cookie: {
                sameSite: process.env.NODE_ENV === "production" ? "none": "lax",
                secure: process.env.NODE_ENV === "production",
                httponly: true, 
                maxAge: 1800000,
            },
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URL,
            }),
        })
    )
}

module.exports = createSession