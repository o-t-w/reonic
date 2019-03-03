import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import React, { Component } from "react";
import { Route, BrowserRouter as Router, withRouter } from "react-router-dom";

import DisplayComponent from "./DisplayComponent";

class App extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <h1>something</h1>
          <Route
            path="/:brand"
            render={props => <DisplayComponent {...props} />}
          />
        </IonContent>
      </IonApp>
    );
  }
}

export default withRouter(App);
