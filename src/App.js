import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import AppNavigation from "./components/Navigation/index.js";
import AppFooter from "./components/Footer/index.js";

import Home from "./views/Home.js";
import About from "./views/About.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppNavigation />

        <div className="Canvas">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={About} />
          </Switch>
        </div>

        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
