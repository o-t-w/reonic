import React, { Component } from "react";

import Button from "./showcase/Button";
import Card from "./showcase/Card";

class DisplayComponent extends Component<any> {
  componentDidMount = () => {
    const match = this.props.match;
    console.log("The display component did mount!");
    this.props.setBrandandComponentState(
      match.params.brand,
      match.params.component
    );
    document.body.setAttribute("brand", match.params.brand);
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
