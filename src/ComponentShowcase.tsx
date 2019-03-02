import React, { Component } from "react";

import { RouteComponentProps } from "react-router";

interface Props {
  setComponent(component: any): void;
}

class ComponentShowcase extends Component<RouteComponentProps & Props, {}> {
  //   componentDidMount() {
  //     const match = this.props.match;
  //     console.log(match);
  //     if (match.params.component) {
  //       this.props.setComponent(match.params.component);
  //     }
  //   }
  render() {
    return <p>TESTING 123</p>;
  }
}

export default ComponentShowcase;
