const express = require('express');

const app = express();

const port = process.env.port || 8080;

app.use(express.static('./client/dist'));


app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})
