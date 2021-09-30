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
    const _id = req.session.currentUser._id;
    console.log("_id", _id)
    //User.find({})
    Flight.find(/*{_id}*/)
      .populate("from")
      .populate("to")
      .populate("user")
      .then((flights) => {
        console.log(flights)
        const list = flights
        //  console.log(list);
        res.render("flights/flights", { flights: list })
      })
      .catch((e) => {
        console.log(e)
      })
  }

//flightController
exports.createFlight = async (req, res) => {
    //    createFlight.user = req.user.id
    const userId = req.session.currentUser._id;
    console.log("userId", userId);
    const { date, time, from, to, kind, plate, model, timeH, timeM, plus } =
      req.body;
    const newFlight = Flight.create({
      date,
      time,
      from,
      to,
      kind,
      plate,
      model,
      timeH,
      timeM,
      plus,
      //user: userId,
    });
    console.log(newFlight);
   // await User.findByIdAndUpdate(userId, { $push: { flights: newFlight._id } });
    return res.redirect("/flights/");
  };

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