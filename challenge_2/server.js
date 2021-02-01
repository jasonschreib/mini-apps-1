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
  //res.send(`POST request to homepage ${req.body.inputText}`);

  //set new var convertedText equal to the result of invocation of parseBody function
  var convertedText = parseBody(req, res);

  //create variable to store html page body with form

  //add the convertedText to this variable through templating

  //respond to the user by passing the above var back
  res.send(`POST req. ${convertedText}`);
});

app.get('/getTest', function(req, res) {
  console.log('GET');
  res.send("GET request to homepage");
});


//parseBody function that will take in the JSON data from req.body and send it back as a response that is in CSV style
var parseBody = (req, res, next) => {
  //set string var for the csv
  var csvString = '';

//take care of case where req.body.inputText is not an object
if (typeof req.body.inputText !== Object) {
  csvString += req.body.inputText;
} else {
  //iterate over the keys and set them as the top row of the csv
  for (var [key, value] of Object.entries(req.body.inputText)) {
    //if the key's value is an array, then don't add it to the list
    if (Array.isArray(value)) {
      continue;
    } else {
      csvString += `${key} `;
    }
  }
  //create new line
  csvString += "\n";
  //create recursive function for iterating through nested objects
  var iterateOverNested = function(currObj) {
    //set variable for the current object
    var current = currObj;
    //then iterate over the object and add each value of each property to the next row
    for (var [key, value] of Object.entries(current)) {
        //if the key's value is an array, then don't add it to the list
        if (Array.isArray(value)) {
          continue;
        } else {
        //add the string val to the result string
        csvString +=`${value} `;
        }
    }
    //create new line
    csvString += "\n";
    //if the current object's children property is empty
    if (current.children.length === 0) {
      //then just return
      return;
      //otherwise iterate over each object by going into children arrays
    } else {
      for (var i = 0; i < current.children.length; i++) {
        //and recurse on each child
        return iterateOverNested(current.children[i]);
      }
    }
  }

  //invoke the function on the original object
  iterateOverNested(req.body.inputText);
  }

  csvString.split(" ").join(",");
};

app.listen(port, () => console.log(`Server running on PORT ${port}`));