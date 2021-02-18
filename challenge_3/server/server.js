const express = require('express');
const db = require('./database');

const app = express();

const port = process.env.port || 2000;

//serve up the index.html page that lives in the client
app.use(express.static('public'));

app.use(express.json());

//post request for adding data to database
app.post('/newUser', (req, res) => {
  console.log('REQ', req.body);
  //add this data from the request object to the database by calling the database save function
  Promise.resolve(db.save(req.body))
    .then((data) => {
      console.log('DATA', data);
      //return the data back to the client
      res.send(data);
    })
});



app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

