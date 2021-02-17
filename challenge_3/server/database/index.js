const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("We are connected!");
});

let userSchema = new mongoose.Schema({
  name: String,
  email: {type: String, unique: true},
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zip: String,
  phone: Number,
  creditCard: Number,
  expiration: String,
  cvv: Number,
  zip: Number
});

let User = mongoose.model('Users', userSchema);

let save = (inputData) => {
  //save the data in a new entry in the database by first creating a new model
  console.log('IN DB', inputData);
  //create new user based on the model
  const document = new User({
    name: inputData.name,
    email: inputData.email,
    password: inputData.password
  });
  //save this document to db
  document.save((err, results) => {
    //err scheck
    if (err) {
      console.log('There was an error while saving...');
    }
    //return the results - this will get back to the server
    return results;

  })
}

let retrieve = () => {

}

module.exports.save = save;
module.exports.retrieve = retrieve;