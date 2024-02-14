import React from "react";
import { Helmet } from "react-helmet";
import ProfilePage from "./Profile";

function AppRouter() {
  return (
    <>
      <Helmet>
        <title>{"Flexhire Tech Test - Juan David Giraldo"}</title>
      </Helmet>
      <ProfilePage />
    </>
  );
}

export default AppRouter;
