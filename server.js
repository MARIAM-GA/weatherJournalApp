// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();
/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("website"));

// Setup Server
const port = 3000;
/* Spin up the server*/
const server = app.listen(port, () => {
  console.log(`server running on localhost: ${port}`);
});
//const server = app.listen(port, listening);
//callback to debug
//function listening(){
//  console.log(`server running`);
//console.log(`running on localhost: ${port}`);
// };

// GET route
//setup GET route pass(string  route, callback function to return the JS object)
app.get("/all", sendData);

function sendData(request, response) {
  response.send(projectData);
}

// POST route
app.post("/add", addData);

function addData(request, response) {
  let data = request.body;
  console.log(request.body);
  projectData["date"] = data.date;
  projectData["temp"] = data.temp;
  projectData["content"] = data.content;

  response.send(projectData);
}