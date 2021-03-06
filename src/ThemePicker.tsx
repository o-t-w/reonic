import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React, { Component } from "react";

import { RouteComponentProps } from "react-router-dom";

interface MyProps {
  brand: string;
  component: string;
}

type Props = RouteComponentProps<MyProps>; // Stupid Typescript stuff

class ThemePicker extends Component<Props> {
  handleComponentPick = (event: any) => {
    if (event.detail.value === this.props.match.params.component) {
      return;
    }
    this.props.history.push(
      `/${
        this.props.match.params.brand
          ? this.props.match.params.brand
          : "undefined"
      }/${event.target.value}`
    );
  };

  handleBrandChange = (event: any) => {
    if (event.detail.value === this.props.match.params.brand) {
      return;
    }
    this.props.history.push(
      `/${event.target.value}/${
        this.props.match.params.component
          ? this.props.match.params.component
          : "undefined"
      }`
    );
  };
  render() {
    return (
      <div className="sticky-theme-picker">
        <IonItem>
          <IonLabel>Choose a component</IonLabel>
          <IonSelect
            value={
              this.props.match.params.component
                ? this.props.match.params.component
                : "undefined"
            }
            onIonChange={event => this.handleComponentPick(event)}
            interface="popover"
            placeholder="Select One"
          >
            <IonSelectOption value="button">Button</IonSelectOption>
            <IonSelectOption value="card">Card</IonSelectOption>
            <IonSelectOption value="radio">Radio</IonSelectOption>
            <IonSelectOption value="slides">Slider</IonSelectOption>
            <IonSelectOption value="icons">Icons</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonItem>
          <IonLabel>Choose a brand</IonLabel>
          <IonSelect
            value={
              this.props.match.params.brand
                ? this.props.match.params.brand
                : "undefined"
            }
            onIonChange={event => this.handleBrandChange(event)}
            interface="popover"
            placeholder="Select One"
          >
            <IonSelectOption value="lrs">LRS</IonSelectOption>
            <IonSelectOption value="ribena">Ribena</IonSelectOption>
            <IonSelectOption value="lucozade">Lucozade</IonSelectOption>
          </IonSelect>
        </IonItem>
      </div>
    );
  }
}

export default ThemePicker;
