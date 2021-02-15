const express = require('express');

const app = express();

const port = process.env.port || 2000;

//serve up the index.html page that lives in the client
app.use(express.static('public'));





app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})

