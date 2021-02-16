const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected!");
});

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: String,
  phone: Number,
  creditCard: Number,
  expiration: Date,
  cvv: Number,
  zip: Number
});

let User = Mongoose.model('Users', userSchema);

let save() => {

}

let retrieve() => {

}

module.exports.save = save;
module.exports.retrieve = retrieve;