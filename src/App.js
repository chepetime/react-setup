import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppNavigation from "./components/Navigation.js";
import AppFooter from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div class="App">
          <AppNavigation />

          <div className="Canvas">
            <Route exact path="/">
              <Clock />
            </Route>
            <Route exact path="/about">
              About: <Clock />
            </Route>
          </div>

          <AppFooter />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

function Clock() {
  const currentTime = () => new Date().toLocaleTimeString("MX");
  const [time, setTime] = useState(currentTime);
  setInterval(() => setTime(currentTime), 1000);

  return <p>It's currently: {time}</p>;
}

export default App;
