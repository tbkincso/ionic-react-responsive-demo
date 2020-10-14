import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
} from "@ionic/react";
import React from "react";

const TimesheetDesktop = () => {
  return (
    <IonContent>
      <IonGrid style={{ margin: "50px" }}>
        <IonRow>
          <IonCol size="2">
            <IonList>
              {Array.apply(1, Array(5)).map((v, i) => (
                <IonItem>
                  <IonLabel>{`Task${i + 1}`}</IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCol>
          <IonCol size="10">
            <IonGrid>
              <IonRow>
                {Array.apply(1, Array(31)).map((value: any, ind: number) => (
                  <IonCol size-sm>
                    <h4>{ind + 1}</h4>
                  </IonCol>
                ))}
              </IonRow>
              {Array.apply(1, Array(7)).map(() => (
                <IonRow>
                  {Array.apply(1, Array(31)).map(() => (
                    <IonCol size-sm>0</IonCol>
                  ))}
                </IonRow>
              ))}
            </IonGrid>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default TimesheetDesktop;
