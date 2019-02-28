import { IonAvatar, IonChip, IonItem, IonLabel } from "@ionic/react";

import React from "react";

function Avatar() {
  return (
    <div>
      <IonAvatar>
        <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
      </IonAvatar>

      <IonChip>
        <IonAvatar>
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>Chip Avatar</IonLabel>
      </IonChip>

      <IonItem>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <IonLabel>Item Avatar</IonLabel>
      </IonItem>
    </div>
  );
}

export default Avatar;
