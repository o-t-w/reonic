import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import React, { Fragment, useEffect, useState } from "react";

interface Props {
  brand: string;
  component: string;
  handleBrandChange;
  handleComponentPick;
}

function ThemePicker(props: Props) {
  return (
    <div className="sticky-theme-picker">
      <IonItem>
        <IonLabel>Choose a component</IonLabel>
        <IonSelect
          onIonChange={event => props.handleComponentPick(event)}
          interface="popover"
          placeholder="Select One"
        >
          <IonSelectOption value="button">Button</IonSelectOption>
          <IonSelectOption value="card">Card</IonSelectOption>
          <IonSelectOption value="icons">Icons</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>Choose a brand</IonLabel>
        <IonSelect
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
