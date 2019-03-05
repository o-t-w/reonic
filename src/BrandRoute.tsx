import React, { Component } from "react";
import {
  Route,
  RouteComponentProps,
  BrowserRouter as Router
} from "react-router-dom";

import DisplayComponent from "./DisplayComponent";

interface MyProps {
  brand: string;
  component: string;
}

type Props = RouteComponentProps<MyProps>; // Stupid Typescript stuff

class BrandRoute extends Component<Props> {
  render() {
    return (
      <div
        className={
          "constrain-width-wide center " + this.props.match.params.brand
        }
      >
        <DisplayComponent />
      </div>
    );
  }
}

export default BrandRoute;
