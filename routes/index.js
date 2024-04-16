var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

// router.post('/trips', (req, res) => {
//   const departure = req.body.departure;
//   const arrival = req.body.arrival;
//   const newTrip = new Trip({
//     departure : departure,
//     arrival: arrival,
//   })
//   newTrip.save().then(()=>{
//     Trip.find().then(data => {
//       res.json({ allTrips: data })
//     })
//   })

// });



module.exports = router;
