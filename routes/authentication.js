var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  console.log("Authentication/GET");
  var user = {
    firstName: "Kantha",
    lastName: "Liyanage",
    accessToken: "1234567890",
  };
  res.status(200).json(user);
});

module.exports = router;
