import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";

import React from "react";

interface Props {
  handleBrandChange;
  handleComponentPick;
  component: string;
  brand: string;
}

function ThemePicker(props: Props) {
  return (
    <div className="sticky-theme-picker">
      <IonItem>
        <IonLabel>Choose a component</IonLabel>
        <IonSelect
          value={props.component}
          onIonChange={event => props.handleComponentPick(event)}
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
          value={props.brand}
          onIonChange={event => props.handleBrandChange(event)}
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

export default ThemePicker;
