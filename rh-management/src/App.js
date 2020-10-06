import React from "react";
import PersonsList from "./Components/PersonsList.component";
import Home from "./Components/Home.component";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/persons">Persons List</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/persons">
          <PersonsList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
