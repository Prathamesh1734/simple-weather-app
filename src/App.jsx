import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const apiKey = "your-api-key";

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
      );
      setWeatherData(res.data);
      setSubmitted(true);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching data");
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-500">
      <div className="mb-3">
        <input
          className="bg-gray-500 border rounded-full ps-3 mr-3 p-2 placeholder-white text-white focus:outline-none "
          placeholder="Location"
          type="text"
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <button
          className="p-2 text-white font-bold"
          type="submit"
          onClick={() => {
            fetchData();
          }}
        >
          Submit
        </button>
      </div>
      <div>
        {submitted ? (
          location ? (
            <Main data={weatherData} />
          ) : (
            <p className="text-xl text-white">Please enter your location</p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
