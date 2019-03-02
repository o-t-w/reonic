import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  withRouter
} from "react-router-dom";
import React, { Component } from "react";

import Button from "./showcase/Button";
import Card from "./showcase/Card";
import ThemePicker from "./ThemePicker";

interface appState {
  brand: string;
  component: string;
}

function Lrs() {
  return <h1>LRS</h1>;
}

function Ribena() {
  return <h1>Ribena</h1>;
}

function Lucozade() {
  return <h1>Lucozade</h1>;
}

class App extends Component<any, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      brand: null,
      component: null
    };
    this.handleComponentPick = this.handleComponentPick.bind(this);
  }

  componentDidMount() {
    const match = this.props.match;
    console.log(match.params.component);
    this.setState({ component: match.params.component });
    let brand = window.localStorage.getItem("brand");
    if (brand !== null) {
      document.body.setAttribute("brand", brand);
      this.setState({
        brand: brand
      });
    }
  }

  setComponent(component) {
    this.setState({
      component: component
    });
  }

  handleComponentPick(event: any) {
    const component = event.target.value;
    this.setState({
      component: component
    });
    this.props.history.push(`/${component}`);
  }

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      document.body.setAttribute("brand", brand);
      window.localStorage.setItem("brand", brand);
      this.setState({
        brand: brand
      });
      this.props.history.push(`/${brand}`);
    }
  };

  render() {
    return (
      <IonApp>
        {/* <Route path="/lrs/" component={Lrs} />
        <Route path="/lucozade/" component={Lucozade} />
        <Route path="/ribena/" component={Ribena} /> */}

        <IonContent>
          <div className="constrain-width-wide center">
            <ThemePicker
              component={this.state.component}
              brand={this.state.brand}
              handleBrandChange={this.handleBrandChange}
              handleComponentPick={this.handleComponentPick}
            />
            <div className="place-to-put-currently-selected-component">
              {this.state.component ? <h1>{this.state.component}</h1> : ""}
              {/* <ComponentShowcase setComponent={this.setComponent} /> */}
              <Route path="/button" component={Button} />
              <Route path="/card" component={Card} />
            </div>
          </div>
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(App);
