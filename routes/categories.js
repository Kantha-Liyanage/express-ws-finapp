var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("Categories/GET");
  var categories = {
    categories: [
      /*
      {
        id: 1,
        name: "Salary",
        budgetCategoryType: "income",
        budgetAmount: "150000.0",
        utilizedAmount: "150000.0",
      },
      {
        id: 2,
        name: "Grocery",
        budgetCategoryType: "expense",
        budgetAmount: "30000.0",
        utilizedAmount: "20000.0",
      },
      {
        id: 3,
        name: "Car/Fuel",
        budgetCategoryType: "expense",
        budgetAmount: "6000.0",
        utilizedAmount: "3000.0",
      },
      {
        id: 4,
        name: "Car/Maintenance",
        budgetCategoryType: "expense",
        budgetAmount: "2000.0",
        utilizedAmount: "150.0",
      },
      {
        id: 5,
        name: "Clothing",
        budgetCategoryType: "expense",
        budgetAmount: "2000.0",
        utilizedAmount: "500.0",
      },
      {
        id: 6,
        name: "Meals",
        budgetCategoryType: "expense",
        budgetAmount: "5000.0",
        utilizedAmount: "2500.0",
      },
      {
        id: 7,
        name: "Utilities/Electricity",
        budgetCategoryType: "expense",
        budgetAmount: "2000.0",
        utilizedAmount: "1800.0",
      },
      {
        id: 8,
        name: "Utilities/Phone",
        budgetAmount: "2000.0",
        utilizedAmount: "1500.0",
      },
      {
        id: 9,
        name: "Utilities/Water",
        budgetCategoryType: "expense",
        budgetAmount: "1000.0",
        utilizedAmount: "1100.0",
      },
      {
        id: 10,
        name: "Utilities/Internet",
        budgetCategoryType: "expense",
        budgetAmount: "1000.0",
        utilizedAmount: "1100.0",
      },
      {
        id: 11,
        name: "Education/Son",
        budgetCategoryType: "expense",
        budgetAmount: "5000.0",
        utilizedAmount: "5000.0",
      },
      {
        id: 12,
        name: "Education/Daughter",
        budgetCategoryType: "expense",
        budgetAmount: "3000.0",
        utilizedAmount: "3500.0",
      },
      */
    ],
  };
  res.status(200).json(categories);
});

router.post("/", async function (req, res, next) {
  console.log("Categories/POST");
  var result = {
    message: "Category created.",
  };
  res.status(200).json(result);
});

router.patch("/", async function (req, res, next) {
  console.log("Categories/PATCH");
  var result = {
    message: "Category updated.",
  };
  res.status(200).json(result);
});

router.delete("/", async function (req, res, next) {
  console.log("Categories/DELETE");
  var result = {
    message: "Category deleted.",
  };
  res.status(200).json(result);
});

module.exports = router;
