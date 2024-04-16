var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/trips', (req, res) => {
  Trip.find().then(data =>{
   res.json({ allTrips: data});
 })
});

module.exports = router;
