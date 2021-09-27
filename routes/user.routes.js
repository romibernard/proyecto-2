const express = require("express")
const router = express.Router()

const userController = require("../controllers/userController")
const routeGuard = require("../middlewares/route-guard")

router.get("/profile", routeGuard.isLogIn, userController.createProfile)

module.exports = router