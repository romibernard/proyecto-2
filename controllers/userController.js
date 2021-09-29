exports.createProfile = async (req, res) => {
    console.log(req.session.currentUser)
    res.render("users/profile", {foundUser: req.session.currentUser })
}

exports.getFlights = (req, res) => {
    
    res.render("flights/flights")
}