//  Dans un fichier trips.js (models/trips.js), créez le schéma et le modèle de la collection trips en reprenant les nom des propriétés de de la variable globale du même nom.

const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    departure: String,
    arrival: String,
    date: Date,
    price: Number,
});

const Trip = mongoose.model('trips', tripSchema);

module.exports = Trip;