var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/cart');
const Booking = require('../models/booking');


//recherche de trajets
router.get('/search', async(req, res) => {
    Trip.findOne({departure: req.body.email, arrival: req.body.password, date:req.body.date}).then(() =>{
        if(data) {
          res.json({result: true});
        } else{
          res.json({result: false});
        }
    })
})



//ajouter un trajet au panier
router.post('/cart', (req, res) => {
    const newCart = new Cart({
        departure: req.body.departure,
        arrival: req.body.arrival,
        horaire: req.body.horaire,
        price: req.body.price,
    });
  
    newCart.save()
    Trip.find().then(data => {
      res.json({ allTrips: data });
    });
   });

   router.get('/cart', (req, res) => {
    Trip.find().then(data => {
      res.json({ allTrips: data });
    });
  });

//ajouter une réservation
router.post('/booking', (req, res) => {
    const newCart = new Cart({
        departure: req.body.departure,
        arrival: req.body.arrival,
        horaire: req.body.horaire,
        price: req.body.price,
        timeDepart: req.body.timeDepart
    });
  
    newCart.save()
    Trip.find().then(data => {
      res.json({ allTrips: data });
    });
   });

   router.get('/booking', (req, res) => {
    Trip.find().then(data => {
      res.json({ allTrips: data });
    });
  });


module.exports = router;