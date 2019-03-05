import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import React, { Component, Fragment } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter
} from "react-router-dom";

import BrandRoute from "./BrandRoute";
import Button from "./showcase/Button";
import Card from "./showcase/Card";
import DisplayComponent from "./BrandRoute";
import Icons from "./showcase/Icons";
import Radio from "./showcase/Radio";
import Slides from "./showcase/Slides";
import ThemePicker from "./ThemePicker";

class App extends Component<any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <IonApp>
        <IonContent>
          <Route
            path="/:brand?/:component?"
            render={props => (
              <Fragment>
                <ThemePicker {...props} />
                <div
                  className={
                    "constrain-width-wide center " + props.match.params.brand
                  }
                >
                  <div className="currently-selected-component">
                    <Route path="/:brand/button" component={Button} />
                    <Route path="/:brand/card" component={Card} />
                    <Route path="/:brand/radio" component={Radio} />
                    <Route path="/:brand/slides" component={Slides} />
                    <Route path="/:brand/icons" component={Icons} />
                    <Route
                      path="/:brand/undefined"
                      render={() => <p>please select a component</p>}
                    />
                  </div>
                </div>
              </Fragment>
            )}
          />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
