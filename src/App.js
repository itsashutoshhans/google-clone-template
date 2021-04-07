import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            {/* Search page */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home (the one with the search on) */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
