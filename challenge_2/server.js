//require the parse.js module
const parser = require('./parse.js');
//require the template.js module
const template = require('./template.js');
//reauire multer
const multer = require('multer');
//require path
const path = require('path');
//require fs
const fs = require('fs');
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



//Multer
// Disk storage for Multer
const storage = multer.diskStorage({
  //where to save file
  destination: function (req, file, cb) {
    cb(null, "uploads")
  },
  ///file name to save
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage});



//POST method route
app.post('/convertToCSV', upload.single('myfile'), function (req, res) {
  console.log('In server');
  console.log(req.file);
  // console.log(req.file.path);
  // console.log(req.body);
  console.log('PATH', path.join(__dirname, req.file.path));
  //read the file
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, req.file.path), 'utf8', (err, data) => {
      if (err) {
        console.log('err reading file');
        reject(err);
      } else {
        console.log('resolved reading file');
        resolve(data);
      }
    });
  })
  .then((data) => {
    console.log('Data', data);
    //set new var and convert input into object form
    var objectForm = JSON.parse(data);
    //set new var convertedText equal to the result of invocation of parseBody function
    var convertedText = parser.parseBody(objectForm);
    //now get the correct format by calling the convertToCSVFormat function
    var formatted = parser.convertToCSVFormat(convertedText);
    console.log('formatted', formatted);
    // //create variable to store html page body with form
    var htmlWithCSV = template.templateOnData(formatted);
    // //respond to the user by passing the above var back
    res.send(htmlWithCSV);
  })
  .catch((err) => {
    console.log('in catch block of reading file');
    res.sendStatus(500);
  })
});


app.listen(port, () => console.log(`Server running on PORT ${port}`));


//upload.single('myfile'),