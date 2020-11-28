/* Global Variables */
/*web api with fetch*/
// use personal API Key for OpenWeatherMap API after Create API credentials on OpenWeatherMap.com
let baseURL = "https://api.openweathermap.org/data/2.5/forecast?zip=";
let apiKey = "&appid=//personal api key here ";
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();
// Add an event listener to an existing HTML button from DOM
document.getElementById("generate").addEventListener("click", performAction);
/* function called by eventlistener*/
function performAction(e) {
  const newZip = document.getElementById("zip").value;
  const feelings = document.getElementById("feelings").value;
  getWeather(baseURL, newZip, apiKey).then(function (data) {
    console.log(data);
    //call  postData function and pass the URL of the POST route('/add'), and an object containing the data to be posted
    postData("/add", {
      date: newDate,
      temp: data.list[0].main.temp,
      content: feelings,
    });
    updateUI();
  });
}
/*GET web API Data*/
const getWeather = async (baseURL, zip, key) => {
  const res = await fetch(baseURL + zip + key);
  try {
    const data = await res.json(); //transform from JSON to JavaScript object
    console.log(data);
    return data;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
// Async  POST request to our route '/add'
const postData = async (url = "", data = {}) => {
  console.log(data);
  const response = await fetch(url, {
    method: "POST", // GET, POST , DELETE,PUT
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    //to turn our data into JSON data ( from JavaScript object to  JSON string)
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
};
// declaration of updateUI function : to GET project Data
const updateUI = async () => {
  const request = await fetch("/all");
  try {
    const allData = await request.json(); // Transform into JSON
    console.log(allData);
    document.getElementById("date").innerHTML = ` Date: ${allData.date} `; //use template literals
    document.getElementById("temp").innerHTML = ` Tempratuer: ${allData.temp} `;
    document.getElementById(
      "content"
    ).innerHTML = `I Feel: ${allData.content} `;
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
