const bcryptjs = require("bcryptjs")
const saltRounds = 10

const User = require("../models/userModel")

exports.signUp = (req, res) => {
    res.render("auth/signup")
}

exports.signUpForm = async (req, res) => {
    const {name, username, email, password} = req.body
    //base de encriptación
    const salt = await bcryptjs.genSalt(saltRounds)
    //contra mezclada con salt y encriptada
    const hashedPassword = await bcryptjs.hash(password, salt)
    const newUser = await User.create({
        name,
        username,
        email,
        passwordHash: hashedPassword
    })
    console.log(newUser)
    res.redirect("/")
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
        console.log(e)
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