const jwt = require("jsonwebtoken");
const userData = (req, res) => {
  const token = generateAccessToken({ username: req.body.username });
  res.json(token);
};
function generateAccessToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: "1800s" });
}
module.exports={userData}
