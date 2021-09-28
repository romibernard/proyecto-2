const Flight = require("../models/flightModel")

exports.getFlights = (req, res) => {
    Flight.find()
    .then((flights) => {
        const list = flights
        console.log(list)
        res.render("flights/flights", {flights: list})
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.createFlight = (req, res) => {
    const {date, from, to, kind, plate, model, timeH, timeM, plus} = req.body
    Flight.create({
        date,
        from,
        to,
        kind,
        plate,
        model,
        timeH,
        timeM,
        plus
    })
    .then((newFlight) => {
        console.log(newFlight)
        res.redirect("/flights")
    })
    .catch((e) => {
        console.log(e)
    })
}

exports.getCreatedFlights = (req, res) => {
    Flight.find()
        .then((fly) => {
            res.render("flights/new-flight", { flights: fly })
        })
        .catch((e) => {
            console.log(e)
        })
}

exports.flightDetails = (req, res) => {
    const { id } = req.params
    Flight.findById(id)
        .then((details) => {
            console.log(details)
            res.render("flights/flight-details", details)
        })
        .catch((e) => {
            console.log(e)
        })
}

exports.deleteFlight = (req, res) => {
    const { id } = req.params
    Flight.findByIdAndRemove(id)
        .then(() => {
            res.redirect("/flights")
        })
        .catch((e) => {
            console.log(e)
        })
}

exports.editFlight = async (req, res) => {
    const { id } = req.params
    const editFlight = await Flight.findById(id)
    Flight.find({})

        .then(() => {
            res.render("flights/edit-flight", { Flight: editFlight })
        })
        .catch((e) => {
            console.log(e)
        })
}

exports.editFlightForm = async (req, res) => {
    const { id } = req.params
    const { date, from, to, kind, plate, model, timeH, timeM, plus } = req.body
    Flight.findByIdAndUpdate(id, {date, from, to, kind, plate, model, timeH, timeM, plus})
        .then(() => {
            res.redirect("/flight")
        })
        .catch((e) => {
            console.log(e)
        })
}