import React, { Component } from "react";
import {
  Route,
  RouteComponentProps,
  BrowserRouter as Router
} from "react-router-dom";

import Button from "./showcase/Button";
import Card from "./showcase/Card";
import ThemePicker from "./ThemePicker";

class DisplayComponent extends Component<RouteComponentProps> {
  handleComponentPick(event: any) {
    const component = event.target.value;
    this.props.history.push(`/${component}/${this.props.match.params.brand}`);
  }

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      this.props.history.push(`/${this.props.match.params.component}/${brand}`);
    }
  };
  render = () => {
    return (
      <div
        className={
          "constrain-width-wide center " + this.props.match.params.brand
        }
      >
        <ThemePicker
          component={this.props.match.params.component}
          brand={this.props.match.params.brand}
          handleBrandChange={this.handleBrandChange}
          handleComponentPick={this.handleComponentPick}
        />
        <div className="currently-selected-component" />
        <Route path="/:brand/button" component={Button} />
        <Route path="/:brand/card" component={Card} />
      </div>
    );
  };
}

export default DisplayComponent;
