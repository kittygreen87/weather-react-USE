import "./App.css";
import React from "react";
import Weather from "./Weather.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          <div className="row">
            <div class="col-12">
              <a
                href="https://github.com/kittygreen87/Weather-React-USE"
                class="source-link"
              >
                Open Source Code
              </a>
              &nbsp;by Catherine Green; Hosted on Netlify.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
     


