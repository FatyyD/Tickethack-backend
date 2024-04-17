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
    Cart.find().then(data => {
      res.json({ allCarts: data });
    });
   });

   router.get('/cart', (req, res) => {
    Cart.find().then(data => {
      res.json({ allCarts: data });
    });
  });

//ajouter une réservation
router.post('/booking', (req, res) => {
    const newBooking = new Booking({
        departure: req.body.departure,
        arrival: req.body.arrival,
        horaire: req.body.horaire,
        price: req.body.price,
        timeDepart: req.body.timeDepart
    });
  
    newBooking.save()
    Booking.find().then(data => {
      res.json({ allbookings: data });
    });
   });

   router.get('/booking', (req, res) => {
    Booking.find().then(data => {
      res.json({ allbookings: data });
    });
  });


module.exports = router;