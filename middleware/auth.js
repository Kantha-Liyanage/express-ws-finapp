module.exports = function (req, res, next) {
  //get the token from the header if present
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)

  console.log("Token:" + token);
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  if (token == "Bearer 1234567890") {
    next();
  } else {
    res.status(400).json({ message: "Invalid token." });
  }
};
