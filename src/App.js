import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppNavigation from "./components/Navigation/Navigation.js";
import AppFooter from "./components/Footer/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavigation />

        <div className="Canvas">
          <Switch>
            <Route exact path="/">
              <Clock />
            </Route>
            <Route exact path="/about">
              About: <Clock />
            </Route>
          </Switch>
        </div>

        <AppFooter />
      </div>
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
