import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router";
import Requests from "./Requests";
import TimesheetMobile from "./TimesheetMobile";

const MobileView = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mobile view</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={TimesheetMobile} exact={true} />
            <Route path="/requests" component={Requests} exact={true} />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="requests" href="/home">
              <IonIcon icon={calendar} />
              <IonLabel>Timesheet</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/requests">
              <IonIcon icon={personCircle} />
              <IonLabel>Requests</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab3" href="/commonTab/tab3">
              <IonIcon icon={map} />
              <IonLabel>Tab Three</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab4" href="/tab4">
              <IonIcon icon={informationCircle} />
              <IonLabel>Tab Four</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default MobileView;
