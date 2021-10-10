var express = require("express");
var router = express.Router();

//Expenses Year-to-Date
router.get("/EXP-YTD", async function (req, res, next) {
  console.log("Reports/GET");

  let map = new Map();
  map.set("Grocery", "50.0");
  map.set("Car", "4.0");
  map.set("Clothing", "5.0");
  map.set("Meals", "10.0");
  map.set("Utilities", "16.0");
  map.set("Education", "15.0");

  let jsonObject = {};
  map.forEach((value, key) => {
    jsonObject[key] = value;
  });

  res.status(200).json(jsonObject);
});

//Income Year-to-Date
router.get("/INC-YTD", async function (req, res, next) {
  console.log("Reports/GET");

  let map = new Map();
  map.set("Salary", "100.0");
  let jsonObject = {};

  map.forEach((value, key) => {
    jsonObject[key] = value;
  });

  res.status(200).json(jsonObject);
});

//Category Trend
router.get("/CAT-YTD-UTILITIES", async function (req, res, next) {
  console.log("Reports/GET");

  let map = new Map();
  map.set("Electricity", "20.0");
  map.set("Phone", "40.0");
  map.set("Water", "10.0");
  map.set("Internet", "30.0");

  let jsonObject = {};
  map.forEach((value, key) => {
    jsonObject[key] = value;
  });

  res.status(200).json(jsonObject);
});

//Budget Vs Actual Month-to-Date
router.get("/BA-EXP-MTD", async function (req, res, next) {
  console.log("Reports/GET");

  var data = [
    {
      name: "Budget",
      data: [
        {
          name: "Grocery",
          amount: "25000.0",
        },
        {
          name: "Utilities",
          amount: "10000.0",
        },
        {
          name: "Education",
          amount: "15000.0",
        },
      ],
    },
    {
      name: "Actual",
      data: [
        {
          name: "Grocery",
          amount: "30000.0",
        },
        {
          name: "Utilities",
          amount: "9500.0",
        },
        {
          name: "Education",
          amount: "10000.0",
        },
      ],
    },
  ];
  res.status(200).json(data);
});

module.exports = router;
