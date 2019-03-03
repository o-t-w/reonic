import React, { Component } from "react";

import Button from "./showcase/Button";
import Card from "./showcase/Card";

class DisplayComponent extends Component<any> {
  componentDidMount = () => {
    const match = this.props.match;
    this.props.setBrandandComponentState(
      match.params.brand,
      match.params.component
    );
  };

  componentDidUpdate = prevProps => {
    if (
      this.props.match.params.brand !== prevProps.match.params.brand ||
      this.props.match.params.component !== prevProps.match.params.component
    ) {
      const match = this.props.match;
      this.props.setBrandandComponentState(
        match.params.brand,
        match.params.component
      );
    }
  };

  render() {
    switch (this.props.match.params.component) {
      case "button":
        return <Button />;
      case "card":
        return <Card />;
      default:
        return <p>No component selected</p>;
    }
  }
}

export default DisplayComponent;
