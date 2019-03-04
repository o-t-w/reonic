import { IonSlide, IonSlides } from "@ionic/react";

import React from "react";

function Slides() {
  return (
    <IonSlides pager={true}>
      <IonSlide>
        <h1>Slide 1</h1>
      </IonSlide>

      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>

      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  );
}

export default Slides;
