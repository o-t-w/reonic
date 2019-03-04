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
import ThemePicker from "./ThemePicker";

interface MyProps {
  brand: string;
  component: string;
}

type Props = RouteComponentProps<MyProps>; // Stupid Typescript stuff

class DisplayComponent extends Component<Props> {
  handleComponentPick = (event: any) => {
    const component = event.target.value;
    this.props.history.push(`/${this.props.match.params.brand}/${component}`);
  };

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      this.props.history.push(`/${brand}/${this.props.match.params.component}`);
    }
  };
  render() {
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
        <div className="currently-selected-component">
          <Route path="/:brand/button" component={Button} />
          <Route path="/:brand/card" component={Card} />
          <Route path="/:brand/radio" component={Radio} />
          <Route path="/:brand/slides" component={Slides} />
          <Route path="/:brand/icons" component={Icons} />
        </div>
      </div>
    );
  }
}

export default DisplayComponent;
