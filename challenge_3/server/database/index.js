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
  phone: String,
  creditCard: String,
  expiration: String,
  cvv: String,
  billingzip: String
});

let User = mongoose.model('Users', userSchema);

let save = (inputData) => {
  //save the data in a new entry in the database by first creating a new model
  console.log('IN DB', inputData);
  //create new user based on the model
  const document = new User({
    name: inputData.name,
    email: inputData.email,
    password: inputData.password,
    line1: inputData.line1,
    line2: inputData.line2,
    city: inputData.city,
    state: inputData.state,
    zip: inputData.zip,
    phone: inputData.phone,
    creditCard: inputData.creditCard,
    expiration: inputData.expiration,
    cvv: inputData.cvv,
    billingzip: inputData.billingzip
  });
  //save this document to db
  return document.save();
}


module.exports.save = save;
