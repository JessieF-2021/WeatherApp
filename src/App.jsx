import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [data, setData] = useState("")
  
  const [location, setLocation] = useState("")
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cdfa017078eb5b60b49f52af6286fbe7"

  // connecting to the api
  const searchLocation = (event) => {
    if(event.key === "Enter") {
      axios.get(url).then((response) => {
        console.log(response.data)
      });
      setLocation("")
    }
   
  }
  return (
    <>
      <div className="app">
       <div className="search">
        
        <input type="text" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter Location"/>

        </div> 
        <div className="container">
          <div className="top">
            <div className="location">
              <p>Accra</p>
            </div>
            <div className="temp">
              <h1>30&deg;C</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
          <div className="bottom">
            <div className="feels">
              <p>35&deg;C</p>
              <p className="bold">Feels Like</p>
            </div>
            <div className="humidity">
              <p className="bold">20%</p>
              <p>Humidity</p>
            </div>
            <div className="wind">
              <p className="bold">12MPH</p>
              <p>Wind speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
