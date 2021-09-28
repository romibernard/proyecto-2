const express = require("express")
const router = express.Router()
const flightController = require("../controllers/flightController")

const Flight = require("../models/flightModel")

//ver todos los vuelos
router.get("/", flightController.getFlights)
//crear vuelo
router.get("/create", flightController.createFlight)
//recibir info del formulario 
router.post("/create", flightController.getCreatedFlights)
//detalles
router.get("/:id", flightController.flightDetails)
//borrar vuelo
router.post("/:id/delete", flightController.deleteFlight)
//editar vuelo
router.get("/:id/edit", flightController.editFlight)
//formulario editar vuelo
router.post("/:id/edit", flightController.editFlightForm)

module.exports = router