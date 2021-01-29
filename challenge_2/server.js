//require express
const express = require('express');
//initialize the express framework
const app = express();

const port = process.env.port || 4000;




app.listen(port, () => console.log(`Server running on PORT ${port}`));

//Middleware functions