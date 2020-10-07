import React from "react";
import PersonsList from "./Components/PersonsList.component";
import Home from "./Components/Home.component";
import AppBar from "./Components/AppBar.component";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <AppBar />
      <br/>
      <Container>
        <Switch>
          <Route path="/persons">
            <PersonsList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
