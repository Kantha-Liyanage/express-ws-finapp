var express = require("express");
var router = express.Router();

router.get("/0", async function (req, res, next) {
  console.log("Chats/GET");
  var chats = {
    chats: [
      {
        id: 801,
        message: "latest messages",
        createdDate: "20210925",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
      {
        id: 80,
        message: "@Cash#Salary+150000&20210925",
        createdDate: "20210925",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 79,
        message: "@Cash#Grocery+25000&20211003",
        createdDate: "20211003",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 78,
        message: "@HNB#Car/Fuel+4000&20211006",
        createdDate: "20211006",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 77,
        message: "@Cash#Car/Maintenance+1000&20211007",
        createdDate: "20211007",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 76,
        message: "@HSBC CC#Clothing+4000&20211008",
        createdDate: "20211008",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 75,
        message: "@Cash#Meals+3000&20211008",
        createdDate: "20211008",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 74,
        message: "Uber Eats",
        createdDate: "20210925",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
    ],
  };

  res.status(200).json(chats);
});

router.get("/10", async function (req, res, next) {
  console.log("Chats/GET");
  var chats = {
    chats: [
      {
        id: 901,
        message: "previouse message",
        createdDate: "20210901",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
      {
        id: 90,
        message: "@Cash#Salary+150000&20210901",
        createdDate: "20210901",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 89,
        message: "@Cash#Grocery+25000&20210903",
        createdDate: "20210903",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 88,
        message: "@HNB#Car/Fuel+4000&20210906",
        createdDate: "20210906",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 87,
        message: "@HSBC CC#Utilities/Electricity+1000&20210915",
        createdDate: "20210915",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 86,
        message: "@HSBC CC#Utilities/Phone+800&20210915",
        createdDate: "20210915",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 85,
        message: "@HSBC CC#Utilities/Water+600&20210915",
        createdDate: "20210915",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 84,
        message: "@HSBC CC#Utilities/Internet+2500&20210915",
        createdDate: "20210915",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 83,
        message: "@HSBC CC#Education/Son+5000&20210920",
        createdDate: "20210920",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 82,
        message: "@HSBC CC#Education/Daughter+3000&20210921",
        createdDate: "20210921",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 91,
        message: "",
        createdDate: "20210825",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath:
          "/data/user/0/com.example.em_fintech_app/cache/CAP1492249985.jpg",
      },
      {
        id: 81,
        message: "Notice - previouse 10 messages",
        createdDate: "20210925",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
    ],
  };

  res.status(200).json(chats);
});

router.get("/20", async function (req, res, next) {
  console.log("Chats/GET");
  var chats = {
    chats: [
      {
        id: 1001,
        message: "Oldest messages",
        createdDate: "20210801",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
      {
        id: 100,
        message: "@Cash#Salary+150000&20210801",
        createdDate: "20210801",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 99,
        message: "@Cash#Grocery+25000&20210803",
        createdDate: "20210803",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 98,
        message: "@HNB#Car/Fuel+4000&20210806",
        createdDate: "20210806",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 97,
        message: "@HSBC CC#Utilities/Electricity+1000&20210815",
        createdDate: "20210806",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 96,
        message: "@HSBC CC#Utilities/Phone+800&20210815",
        createdDate: "20210815",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 95,
        message: "@HSBC CC#Utilities/Water+600&20210815",
        createdDate: "20210815",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 94,
        message: "@HSBC CC#Utilities/Internet+2500&20210815",
        createdDate: "20210815",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 93,
        message: "@HSBC CC#Education/Son+5000&20210820",
        createdDate: "20210815",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 92,
        message: "@HSBC CC#Education/Daughter+3000&20210821",
        createdDate: "20210815",
        createdTime: "131200",
        transaction: true,
        deleted: false,
        imagePath: "",
      },
      {
        id: 91,
        message: "",
        createdDate: "20210825",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath:
          "/data/user/0/com.example.em_fintech_app/cache/CAP752947785.jpg",
      },
      {
        id: 91,
        message: "Notice - last 10 messages",
        createdDate: "20210825",
        createdTime: "131200",
        transaction: false,
        deleted: false,
        imagePath: "",
      },
    ],
  };

  res.status(200).json(chats);
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
