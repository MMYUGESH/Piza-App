import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Pizza from "./Components/Pizza";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import Custom from "./Components/Custom";
import Menu from "./Components/Menu";
import Orders from "./Components/Orders";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/pizza" component={Pizza} />
          <Route exact path="/Menu" component={Menu} />
          <Route exact path="/Custom" component={Custom} />
          <Route exact path="/Orders" component={Orders} />
        </Switch>
      </div>
    </Router>
  );
}
