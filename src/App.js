import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Header from "./Components/Header";

const Shirts = () => (
  <div>
    <h1> SHIRTS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
