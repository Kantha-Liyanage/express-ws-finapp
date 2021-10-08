var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  console.log("Chats/GET");
  res.status(200).json(accounts);
});

router.post("/", async function (req, res, next) {
  console.log("Chats/POST");
  var result = {
    message: "Chat created.",
  };
  res.status(200).json(result);
});

router.delete("/", async function (req, res, next) {
  console.log("Chats/DELETE");
  var result = {
    message: "Chat deleted.",
  };
  res.status(200).json(result);
});

module.exports = router;
