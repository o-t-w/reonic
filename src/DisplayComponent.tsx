import React, { Component } from "react";
import {
  Route,
  RouteComponentProps,
  BrowserRouter as Router
} from "react-router-dom";

import Button from "./showcase/Button";
import Card from "./showcase/Card";
import Icons from "./showcase/Icons";
import Radio from "./showcase/Radio";
import Slides from "./showcase/Slides";

function DisplayComponent() {
  return (
    <div className="currently-selected-component">
      <Route path="/:brand/button" component={Button} />
      <Route path="/:brand/card" component={Card} />
      <Route path="/:brand/radio" component={Radio} />
      <Route path="/:brand/slides" component={Slides} />
      <Route path="/:brand/icons" component={Icons} />
      <Route
        path="/:brand/undefined"
        render={() => <p>please select a component</p>}
      />
    </div>
  );
}

export default DisplayComponent;
