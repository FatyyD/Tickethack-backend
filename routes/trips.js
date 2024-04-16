var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
const {checkBody} = require('../modules/checkBody');

router('/', (req, res) =>{

})
/*router.get('/', (req, res) => {
    Trip.find().then(data =>{
     res.json({ allTrips: data});
   })
 });*/
 

 router.post('/', (req, res) => {
    if(!checkBody(req.body, ["departure", "arrival"])){
        res.json({result: false, error:"Missing or empty fields"});
        return;
    }

    User.findOne({departure: req.body.departure, arrival: req.body.arrival}).then(() =>{
        if(data) {
          res.json({result: true});
        } else{
          res.json({result: false});
        }
    })
})

module.exports = router;