import React from "react";
import PersonsList from "./Components/PersonsList.component";
import Home from "./Components/Home.component";
import AppBar from "./Components/AppBar.component";
import Profile from "./Components/Profile.component";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./utils/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBar />
        <br />
        <Container>
          <Switch>
            <Route path="/profile/:email">
              <Profile />
            </Route>
            <Route path="/persons">
              <PersonsList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
