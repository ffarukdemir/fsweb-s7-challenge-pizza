import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderForm from "./OrderForm";
import HomePage from "./HomePage";
import OrderReceived from "./OrderReceived";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/pizza" component={OrderForm} />
        <Route path="/order-received" component={OrderReceived} />
      </Switch>
    </Router>
  );
};

export default App;
