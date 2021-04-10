# Weather-Journal App Project

## Overview

This project is  an asynchronous web app that uses Web API and user data to dynamically update the UI. 
## properties of this project

### Created by using HTML& css &javascript &the DOM& NODE JS
### this project  includes
        #### Set up a Node and Express environment to develop a web application on a  local machine
        #### Set up a server and route data through a web app
        #### Integrate an external API into a web app and data routes
        #### Use HTTP POST & GET requests to create  data in the app
        #### Use the JavaScript Fetch API to update the UI based on HTML input forms and external API data
## Instructions 
### set up the project environment. installed  Node from the terminal
         #### create a package.json file use "npm init" command
         ####  Install the packages Express, Body-Parser, and Cors from the terminal 
                  "npm install express --save"
                    " npm install body-parser --save"
                "npm install cors --save"
          #### require dependensies(Express, Body-Parser, and Cors) in the server.js file.
          #### configure express to use cors.
          ####  Create a server running on the port 3000
          #### Add a console.log() to the server callback function, and test that your server  is running using Node in the terminal to run the file server.js
###Add a GET route that returns the projectData object in the server code Then, add a POST route   that adds incoming data to projectData.
       
###Acquire API credentials from OpenWeatherMap website.,Subscribe at openweathermap.org , get key,  get base url for zip code option.use them to create global variables at the app.js code.
               ####Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
               #### Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
               #### Inside that callback function call the async GET request with the parameters:
                 base url
                 user entered zip code (see input in html with id zip)
                 personal API key
### make a POST request to add the API data,  data entered by the user, to the app.
             #### write another async function to make this POST request.
             #### The function should receive a path and a data object.
             ####The data object should include (temperature,date,user response)
###Write another async function that is called after the completed POST request. 
        This function should retrieve data from the app, select the  elements on the DOM (index.html) , and then update their values to reflect the dynamic values for:
               #### Temperature
               ####   Date
               ####   User input
###.use `style.css` to style the application .
