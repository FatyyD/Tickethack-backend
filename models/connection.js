const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://aminebenmbark:ARIANEmdp2024@cluster0.sl7ebch.mongodb.net/Tickethack';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

  