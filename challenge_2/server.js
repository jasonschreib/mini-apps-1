//require the parse.js module
const parser = require('./parse.js');
//require the template.js module
const template = require('./template.js');
//require express
const express = require('express');
//initialize the express framework
const app = express();

const port = process.env.port || 4000;


//Middleware functions

//serve up the index.html page that lives in the client
app.use(express.static('client'));

//use express body-parser to parse the incoming request for post requests
app.use(express.urlencoded({ extended: true }));
//^^This allows the parsing of both JSON objects or arrays

//POST method route
app.post('/convertToCSV', function (req, res) {
  console.log('REQ', req.body.myfile);
  //read the file
  //set new var and convert input into object form
  var objectForm = JSON.parse(contents.result);
  //set new var convertedText equal to the result of invocation of parseBody function
  var convertedText = parser.parseBody(objectForm);
  //now get the correct format by calling the convertToCSVFormat function
  var formatted = parser.convertToCSVFormat(convertedText);
  // //create variable to store html page body with form
  var htmlWithCSV = template.templateOnData(result);
  // //respond to the user by passing the above var back
  res.send(htmlWithCSV);
});



app.listen(port, () => console.log(`Server running on PORT ${port}`));