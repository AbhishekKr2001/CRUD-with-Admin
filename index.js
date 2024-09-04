const express = require('express');

const routes = require('./myroutes/routes.js')


const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/student", routes);

app.listen(PORT, () => console.log("Server is running at port : " + PORT));

//run npx nodemon index.js in the terminal
//localhost:5000/student