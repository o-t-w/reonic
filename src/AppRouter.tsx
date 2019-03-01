import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";

function Index() {
  return <p>Hello world!</p>;
}

function Button() {
  return <button>CLICK</button>;
}

function Card() {
  return <h1>CARD!!!</h1>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/button">button</Link>
        <Link to="card">Card</Link>
        <Route path="/" exact component={Index} />
        <Route path="/button/" component={Button} />
        <Route path="/card/" component={Card} />
      </div>
    </Router>
  );
}

export default AppRouter;
