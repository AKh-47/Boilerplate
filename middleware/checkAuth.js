const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    const user = jwt.verify(token, process.env.SECRET);
    req.user = user;

    next();
  } catch (err) {
    res.status(401).json({
      message: "Auth Failed",
    });
  }
};
