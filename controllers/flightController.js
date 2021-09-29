const Flight = require("./../models/flightModel")
const Airports = require("./../models/airportsModel")

/*exports.getFlights = (req, res) => {
    Flight.find()
    .populate("from")
    .populate("to")
    .then((flights) => {
        const list = flights
        console.log(list)
        res.render("flights/flights", {flights: list})
    })
    .catch((e) => {
        console.log(e)
    })
}
*/
exports.getFlights = (req, res) => {
    //User.find({})
    Flight.find()
    .populate("from")
    .populate("to")
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
//    createFlight.user = req.user.id
    const {date, time, from, to, kind, plate, model, timeH, timeM, plus} = req.body
    Flight.create({
        date,
        time,
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
    Airports.find()
        .then((airports) => {
            res.render("flights/new-flight", {airports})
        })
        .catch((e) => {
            console.log(e)
        })
}

exports.flightDetails = (req, res) => {
    const { id } = req.params
    Flight.findById(id)
    .populate("from")
    .populate("to")
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
    const editAirports = await Airports.find() //obj 2
    return res.render("flights/edit-flight", { Flight: editFlight, airports: editAirports })
}

exports.editFlightForm = async (req, res) => {
    const { id } = req.params
    const { date, time, from, to, kind, plate, model, timeH, timeM, plus } = req.body
    Flight.findByIdAndUpdate(id, {date, time, from, to, kind, plate, model, timeH, timeM, plus})
        .then(() => {
            res.redirect("/flights")
        })
        .catch((e) => {
            console.log(e)
        })
}