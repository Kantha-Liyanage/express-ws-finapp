var express = require("express");
var router = express.Router();

router.get("/", async function (req, res, next) {
  console.log("Accounts/GET");
  var accounts = {
    accounts: [
      {
        id: 1,
        name: "Cash",
        accountType: "asset",
        currentBalance: "25000.0",
      },
      {
        id: 2,
        name: "HNB",
        accountType: "asset",
        currentBalance: "170000.0",
      },
      {
        id: 3,
        name: "HNB CC",
        accountType: "liability",
        currentBalance: "2000.0",
      },
      {
        id: 4,
        name: "HSBC CC",
        accountType: "liability",
        currentBalance: "5000.0",
      },
    ],
  };
  res.status(200).json(accounts);
});

router.post("/", async function (req, res, next) {
  console.log("Accounts/POST");
  var result = {
    message: "Account created.",
  };
  res.status(200).json(result);
});

router.patch("/", async function (req, res, next) {
  console.log("Accounts/PATCH");
  var result = {
    message: "Account updated.",
  };
  res.status(200).json(result);
});

router.delete("/", async function (req, res, next) {
  console.log("Accounts/DELETE");
  var result = {
    message: "Account deleted.",
  };
  res.status(200).json(result);
});

module.exports = router;
