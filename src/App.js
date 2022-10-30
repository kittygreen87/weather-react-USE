import logo from "./logo.svg";
import "./App.css";
import WeatherSearchbar from "./WeatherSearchbar.js";

function App() {
  return (
    <div className="App">
      <h1>Quick Weather Search</h1>
      <p>
        Use the search bar below to quickly view current weather for any
        location.
      </p>
      <WeatherSearchbar />
    </div>
  );
}

export default App;