import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";

const Shirts = () => (
  <div>
    <h1> SHIRTS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
