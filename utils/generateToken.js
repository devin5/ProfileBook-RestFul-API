const jwtToken = require("jsonwebtoken");
const secrets = require("../secrets.js");

module.exports = function generateToken(user) {
  const payload = {
    User_Email: user.User_Email,
    User_ID: user.User_ID
  };
  const options = {
    expiresIn: "360d"
  };
  return jwtToken.sign(payload, secrets.jwtSecret, options);
};