var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/Day").model;
const Reservation = require("../models/Reservation").model;

// Parameters:
// {
//   "date": String ("Dec 02 2019 06:00"),
//   "table": table id,
// 	"name": String,
// 	"phone": String,
// 	"email": String
// }

router.get("/", function (req, res, next) {
  Day.find(
    {
      "tables.isAvailable": false,
    },
    (err, tables) => {
      res.send(tables);
    }
  );
});

router.post("/", function (req, res, next) {
  Day.find({ date: req.body.date }, (err, days) => {
    if (!err) {
      if (days.length > 0) {
        let day = days[0];
        day.tables.forEach((table) => {
          if (table._id == req.body.table) {
            // The correct table is table
            table.reservation = new Reservation({
              name: req.body.name,
              phone: req.body.phone,
              email: req.body.email,
            });
            table.isAvailable = false;
            day.save((err) => {
              if (err) {
                console.log(err);
              } else {
                console.log("Reserved");
                res.status(200).send("Added Reservation");
              }
            });
          }
        });
      } else {
        console.log("Day not found");
      }
    }
  });
});

// router.put("/", function (req, res, next) {
//   Day.find({ date: req.body.date }, (err, days) => {
//     if (!err) {
//       if (days.length > 0) {
//         let day = days[0];
//         day.tables.forEach((table) => {
//           if (table._id == req.body.table) {
//             // The correct table is table
//             table.reservation = new Reservation({
//               status: true,
//             });
//             table.isAvailable = false;
//             day.save((err) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 console.log("Reserved");
//                 res.status(200).send("Added Reservation");
//               }
//             });
//           }
//         });
//       } else {
//         console.log("Day not found");
//       }
//     }
//   });
// });

module.exports = router;
