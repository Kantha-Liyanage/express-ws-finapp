var express = require("express");
var router = express.Router();

//Expenses Year-to-Date
router.get("/E-YTD", async function (req, res, next) {
  console.log("Reports/GET");
  var data = {
    accounts: [
      {
        id: 1,
        name: "Cash",
        accountType: "asset",
        currentBalance: "25000.0",
      },
    ],
  };
  res.status(200).json(accounts);
});

//Income Year-to-Date
router.get("/I-YTD", async function (req, res, next) {
  console.log("Reports/GET");
  var data = {
    accounts: [
      {
        id: 1,
        name: "Cash",
        accountType: "asset",
        currentBalance: "25000.0",
      },
    ],
  };
  res.status(200).json(accounts);
});

//Budget Vs Actual Month-to-Date
router.get("/BA-MTD", async function (req, res, next) {
  console.log("Reports/GET");
  var data = {
    accounts: [
      {
        id: 1,
        name: "Cash",
        accountType: "asset",
        currentBalance: "25000.0",
      },
    ],
  };
  res.status(200).json(accounts);
});

//Category Trend
router.get("CT-YTD#Utilities", async function (req, res, next) {
  console.log("Reports/GET");
  var data = {
    accounts: [
      {
        id: 1,
        name: "Cash",
        accountType: "asset",
        currentBalance: "25000.0",
      },
    ],
  };
  res.status(200).json(accounts);
});

module.exports = router;
