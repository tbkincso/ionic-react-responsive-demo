import {
  IonLabel,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
  IonChip,
  IonText,
} from "@ionic/react";
import React from "react";

const row = () => (
  <IonRow>
    <IonCol>
      <IonChip color="primary">5</IonChip>
      <IonLabel>Admin..</IonLabel>
    </IonCol>
    <IonCol>
      <IonChip color="warning">1</IonChip>
      <IonLabel>Gisett</IonLabel>
    </IonCol>
    <IonCol>
      <IonChip color="tertiary">0</IonChip>
      <IonLabel>Config...</IonLabel>
    </IonCol>
    <IonCol>
      <IonChip color="danger">0.5</IonChip>
      <IonLabel>Mentoring</IonLabel>
    </IonCol>
  </IonRow>
);

const TimesheetMobile = () => {
  return (
    <IonContent>
      <IonText>
        <h2 style={{ margin: "60px" }}>My projects</h2>
      </IonText>
      <IonGrid style={{ margin: "10px" }}>
        {Array.apply(0, Array(5)).map(() => row())}
      </IonGrid>
    </IonContent>
  );
};

export default TimesheetMobile;
