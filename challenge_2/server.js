//require express
const express = require('express');
//initialize the express framework
const app = express();

const port = process.env.port || 4000;


//Middleware functions

//serve up the index.html page that lives in the client
app.use(express.static('client'));


//POST method route
app.post('/convertToCSV', function(req, res) {
  console.log('POST');
  res.send("POST request to homepage");
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