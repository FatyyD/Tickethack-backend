//  Dans un fichier trips.js (models/trips.js), créez le schéma et le modèle de la collection trips en reprenant les nom des propriétés de de la variable globale du même nom.

const mongoose = require('mongoose');

const tripsShema = new mongoose.Schema({
    departure: String,
    arrival: String
});

const tripsModel = mongoose.model('trips', tripsShema);

module.exports = tripsModel;