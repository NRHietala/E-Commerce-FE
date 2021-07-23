import React from "react";
import { Route, Switch } from "react-router-dom";
import { StyleReset } from "./styles/global/StyleReset";
import { Home } from "./components/pages";
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <StyleReset />
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
