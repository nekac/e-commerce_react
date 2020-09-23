import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Styles/App.css";
import Home from "./Pages/Home";

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
        <Route path="/shirts" component={Shirts} />
      </Switch>
    </div>
  );
}

export default App;
