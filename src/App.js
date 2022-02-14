import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* Search page */}
          </Route>
          <Route exact path="/">
            {/* Home (the one with the search on) */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
