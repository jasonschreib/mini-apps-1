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
  //res.send(`POST request to homepage ${req.body.inputText}`);

  //set new var convertedText equal to the result of invocation of parseBody function
  var convertedText = parseBody(req.body.inputText);
  console.log('CONVERTED', convertedText);

  //create variable to store html page body with form

  //add the convertedText to this variable through templating so the form is included as a response

  //respond to the user by passing the above var back
  res.send(`POST req. ${convertedText}`);
});

//test route
app.get('/getTest', function(req, res) {
  console.log('GET');
  res.send("GET request to homepage");
});


app.listen(port, () => console.log(`Server running on PORT ${port}`));