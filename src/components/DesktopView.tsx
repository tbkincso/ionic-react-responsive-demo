import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { Route, Redirect } from "react-router";
import Requests from "./Requests";
import { IonReactRouter } from "@ionic/react-router";
import TimsheetDesktop from "./TimesheetDesktop";

const DesktopView = () => {
  return (
    <>
      <IonMenu
        side="start"
        contentId="menu-content"
        menuId="sidemenu"
        type="overlay"
      >
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent id="menu-content">
          <IonList>
            <IonItem>My timesheet</IonItem>
            <IonItem>
              <IonButton href="/requests" fill="clear">
                Timesheet requests
              </IonButton>
            </IonItem>
            <IonItem>Holiday requests</IonItem>
            <IonItem>Overtime requests</IonItem>
            <IonItem>Help</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton
                auto-hide="false"
                menu="sidemenu"
                mode="ios"
              ></IonMenuButton>
            </IonButtons>

            <IonTitle>Desktop view</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/home" component={TimsheetDesktop} exact={true} />
            <Route path="/requests" component={Requests} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonPage>
    </>
  );
};

export default DesktopView;
