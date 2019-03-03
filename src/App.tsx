import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, withRouter } from "react-router-dom";

import DisplayComponent from "./DisplayComponent";
import ThemePicker from "./ThemePicker";

interface appState {
  brand: string;
  component: string;
}

class App extends Component<any, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      brand: null,
      component: null
    };
    this.handleComponentPick = this.handleComponentPick.bind(this);
    this.handleBrandChange = this.handleBrandChange.bind(this);
  }

  setBrandandComponentState = (brand, component) => {
    this.setState({
      brand: brand,
      component: component
    });
  };

  handleComponentPick(event: any) {
    const component = event.target.value;
    this.props.history.push(`/${component}/${this.state.brand}`);
  }

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      this.props.history.push(`/${this.state.component}/${brand}`);
    }
  };

  render() {
    return (
      <IonApp>
        <IonContent>
          <div className="constrain-width-wide center">
            <ThemePicker
              component={this.state.component}
              brand={this.state.brand}
              handleBrandChange={this.handleBrandChange}
              handleComponentPick={this.handleComponentPick}
            />
            <div className="currently-selected-component">
              {/* {this.state.brand !== null ? (
                <h1>{this.state.brand}</h1>
              ) : (
                <h2>No brand selected</h2>
              )}
              {this.state.component !== null ? (
                <h2>{this.state.component}</h2>
              ) : (
                <h2>No component selected</h2>
              )} */}

              <Route
                path="/:component/:brand/"
                render={props => (
                  <DisplayComponent
                    {...props}
                    setBrandandComponentState={this.setBrandandComponentState}
                  />
                )}
              />
            </div>
          </div>
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(App);
