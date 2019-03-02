import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import React, { Component } from "react";

function Lrs() {
  return <h1>LRS</h1>;
}

function Ribena() {
  return <h1>Ribena</h1>;
}

function Lucozade() {
  return <h1>Lucozade</h1>;
}

class AppRouter extends Component<{ brand: string; component: string }> {
  render() {
    if (this.props.brand === "ribena") {
      console.log("ribena!");
      <Redirect to="/ribena" />;
    } else if (this.props.brand === "lrs") {
      console.log("lrs!");
      <Redirect to="/lrs" />;
    } else if (this.props.brand === "lucozade") {
      console.log("lucozade!");
      <Redirect to="/lucozade" />;
    }
    return (
      <Router>
        <div>
          {/* <Link to="/">HOME</Link>
          <Link to="/button">button</Link>
          <Link to="card">Card</Link> */}
          <Route path="/lrs" exact component={Lrs} />
          <Route path="/lucozade/" component={Lucozade} />
          <Route path="/ribena/" component={Ribena} />
        </div>
      </Router>
    );
  }
}

export default AppRouter;
