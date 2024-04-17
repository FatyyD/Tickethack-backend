var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const Cart = require('../models/cart');
const Booking = require('../models/booking');

const trips = []

router.post('/', (req, res) => {
  let newTrips = {departure: data.departure, arrival: data.arrival, date: data.date, Number: data.Number}
  .then(data => {

    trips.push(newTrips);
    res.json({result: true, trips: newTrips});
  });
});

  
//recherche de trajets
router.get('/:departure/:arrival/:date', async(req, res) => {

const moment = require('moment');
const formattedDate = moment(req.params.date).format('YYYY-MM-DD');
const startdate = `${formattedDate}T00:00:00.000`;
const endDate = `${formattedDate}T23:59:59.999`;

    Trip.find({departure: { $regex: new RegExp(req.params.departure, "i") },
              arrival: { $regex: new RegExp(req.params.arrival, "i") },
              date: { $gte: startdate, $lte: endDate },
            })
      .then((data) =>{
      if(data) {
          console.log(data);
          res.json({trips: data});
        } else{
          res.json({result: false});
        }
        // res.json({data});

    //  Trip.find()
    //  .then( data =>
    //     res.json({trips: Trip})
    
     
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