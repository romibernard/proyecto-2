//verificación de login y redirección en dado caso
const isLogIn = (req, res, next) => {
    if(!req.session.currentUser) {
        return res.redirect("/auth/login")
    }
    next()
}

const isLogOut = (req, res, next) => {
    if (req.session.currentUser){
        return res.redirect("/")
    }
    next()
}

module.exports = {
    isLogIn,
    isLogOut
}
