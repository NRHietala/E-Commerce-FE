import React from "react";
import { Route, Switch } from "react-router-dom";
import { StyleReset } from "./styles/global/StyleReset";
import { Home } from "./components/pages";

function App() {
  return (
    <>
      <StyleReset />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
