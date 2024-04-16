const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    horaire: Number,
    price: Number,
    timeDepart: String,
});

const Booking = mongoose.model('bookings', bookingSchema);

module.exports = Booking;