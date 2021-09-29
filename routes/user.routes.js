const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")
const routeGuard = require("../middlewares/route-guard")

router.get("/profile", routeGuard.isLogIn, userController.createProfile)

router.get("/flights", userController.getFlights) //crear controller

module.exports = router