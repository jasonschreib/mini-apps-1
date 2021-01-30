//require express
const express = require('express');
//initialize the express framework
const app = express();

const port = process.env.port || 4000;


//Middleware functions

//serve up the index.html page that lives in the client
app.use(express.static('client'));

//use express body-parser to parse the incoming request for post requests
app.use(express.urlencoded({extended: true}));
//^^This allows the parsing of both JSON objects or arrays

//POST method route
app.post('/convertToCSV', function(req, res) {
  console.log('POST', req);
  res.send(`POST request to homepage ${req.body.inputText}`);
  //respond to the user by passing the form and the converted JSON back
});

app.get('/getTest', function(req, res) {
  console.log('GET');
  res.send("GET request to homepage");
});


//parseBody function that will take in the JSON data from req.body and send it back as a response that is in CSV style
var parseBody = (req, res, next) => {

  next();
};

app.listen(port, () => console.log(`Server running on PORT ${port}`));