const express = require("express")
const router = express.Router()

const authController = require("../controllers/authController")
const routeGuard = require("../middlewares/route-guard")

//crear usuario
router.get("/signup", routeGuard.isLogOut, authController.signUp)

router.post("/signup", authController.signUpForm)

//iniciar sesión
router.get("/login", routeGuard.isLogOut, authController.loginUser)

router.post("/login", authController.loginUserForm)

//cerrar sesión
router.post("/logout", authController.logoutUser)


module.exports = router