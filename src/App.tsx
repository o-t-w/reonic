import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import {
  IonApp,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent
} from "@ionic/react";
import React, { Component } from "react";

import AppRouter from "./AppRouter";
import Avatar from "./Avatar";
import Icons from "./Icons";
import ThemePicker from "./ThemePicker";

interface appState {
  brand: string;
  component: string;
}

class App extends Component<{}, appState> {
  constructor(props: any) {
    super(props);
    this.state = {
      brand: "",
      component: null
    };
    this.handleComponentPick = this.handleComponentPick.bind(this);
  }

  componentDidMount() {
    let brand = window.localStorage.getItem("brand");
    if (brand !== null) {
      document.body.setAttribute("brand", brand);
      this.setState({
        brand: brand
      });
    }
  }

  handleComponentPick(event: any) {
    const component = event.target.value;
    this.setState({
      component: component
    });
  }

  handleBrandChange = (event: any) => {
    if (event.target instanceof HTMLElement) {
      const brand = event.target.value;
      document.body.setAttribute("brand", brand);
      window.localStorage.setItem("brand", brand);
      this.setState({
        brand: brand
      });
    }
  };

  render() {
    return (
      <IonApp>
        <IonContent>
          <div className="constrain-width-wide center">
            <ThemePicker
              brand={this.state.brand}
              handleBrandChange={this.handleBrandChange}
              handleComponentPick={this.handleComponentPick}
            />
            <div className="place-to-put-currently-selected-component">
              {this.state.component ? <h1>{this.state.component}</h1> : ""}

              <AppRouter />
            </div>
          </div>
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
