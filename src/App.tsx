import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import { IonApp, IonContent } from "@ionic/react";
import React, { Component } from "react";

import Button from "./showcase/Button";
import Card from "./showcase/Card";
import Icons from "./showcase/Icons";
import Radio from "./showcase/Radio";
import { Route } from "react-router-dom";
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
              <div className="constrain-width-wide center">
                <ThemePicker {...props} />
                <div className={props.match.params.brand}>
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
              </div>
            )}
          />
        </IonContent>
      </IonApp>
    );
  }
}

export default App;
