import React, { PropsWithChildren } from "react";
import ActionCable from "actioncable";

const CableContext = React.createContext<any>({});

function CableProvider({ children }: PropsWithChildren) {
  const actionCableUrl = process.env.REACT_APP_CABLE_URL;

  const CableApp = {} as any;
  CableApp.cable = ActionCable.createConsumer(actionCableUrl);

  return (
    <CableContext.Provider value={CableApp}>{children}</CableContext.Provider>
  );
}

export { CableContext, CableProvider };
