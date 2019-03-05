import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";

import BrandRoute from "./BrandRoute";
import DisplayComponent from "./BrandRoute";
import ThemePicker from "./ThemePicker";

class App extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  handleComponentPick = (event: any) => {
    console.log(event.target.value);
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
      <IonApp>
        <IonContent>
          <Route
            exact
            path="/"
            render={props => (
              <ThemePicker
                handleBrandChange={this.handleBrandChange}
                handleComponentPick={this.handleComponentPick}
                {...props}
              />
            )}
          />
          <Route
            path="/:brand"
            render={props => (
              <div>
                <ThemePicker
                  component={this.props.match.params.component}
                  brand={this.props.match.params.brand}
                  handleBrandChange={this.handleBrandChange}
                  handleComponentPick={this.handleComponentPick}
                  {...props}
                />
                <BrandRoute {...props} />
              </div>
            )}
          />
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(App);
