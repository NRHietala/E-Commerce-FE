import React from "react";
import { Route, Switch } from "react-router-dom";
import { StyleReset } from "./styles";
import { Home } from "./components/pages";

function App() {
  return (
    <>
      <StyleReset />
      <p>I'm working 🙂</p>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
