const bcryptjs = require("bcryptjs")
const saltRounds = 10

const User = require("../models/userModel")

exports.signUp = (req, res) => {
    res.render("auth/signup")
}

exports.signUpForm = async (req, res) => {
    const { name, username, email, password } = req.body
    try {
        if (!name || !username || !email || !password || !name.length || !username.length || !email.length || !password.length) throw new Error("Uno o mas campos son erróneos.")
        const salt = await bcryptjs.genSalt(saltRounds)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = await User.create({
            name,
            username,
            email,
            passwordHash: hashedPassword,
        })
        console.log(newUser)
        res.redirect("/auth/login")
    } catch (error) {
        res.render("auth/signup", { errorMessage: error.message })
    }
}

exports.loginUser = async (req, res) => {
    res.render("auth/login")
}

exports.loginUserForm = async (req, res) => {
    //datos del formulario
    const {email, password} = req.body
    if (email === "" || password === "") {
        return res.render("auth/login", {
            errorMessage: "Ingresa tus datos para iniciar."})
    }
    //buscar usuario(mail)
    try {
        const foundUser = await User.findOne({email})
        if(!foundUser){
            return res.render("auth/login", {
                errorMessage: "Usuario o contraseña incorrectos."
            })
        }
        //validar que la contraseña coincida
        const isMatched = await bcryptjs.compareSync(password, foundUser.passwordHash)
        //si no coincide...
        if(isMatched === false){
            return res.render("auth/login", {
                errorMessage: "Usuario o contraseña incorrectos."
            })
        }
        //si coincide...
        req.session.currentUser = foundUser
        return res.redirect("/user/profile")
        //manejo de errores
    } catch (e){
        res.render("auth/login", { errorMessage: error.message })
    }
}

exports.logoutUser = (req, res) => {
    //terminar la sesión al "destruir la cookie"
    req.session.destroy((e) => {
        if(e){
            console.log(e)
        }
        res.render("auth/logout")
    })
}