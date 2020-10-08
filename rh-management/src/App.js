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
import { Provider } from "react-redux";
import store from "./store/storeCreator"

function App() {
  return (
    <Router>
      <Provider store={store}>
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
      </Provider>
    </Router>
  );
}

export default App;
