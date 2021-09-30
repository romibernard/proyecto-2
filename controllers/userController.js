const User = require("./../models/userModel");
exports.createProfile = async (req, res) => {
  console.log("Current", req.session.currentUser._id);
  res.render("users/profile", { foundUser: req.session.currentUser });
};

exports.getFlights = async (req, res) => {
  const userId = req.session.currentUser._id;
  const oneUser = await User.findById(userId).populate("flights");
  console.log(oneUser);
  const { flights } = oneUser;

  res.render("flights/flights", { flights });
};