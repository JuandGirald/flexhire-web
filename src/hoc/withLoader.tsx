import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { LOADING_SELECTOR } from "store/selectors/ui";

function withLoader(InnerComponent: any) {
  return (props: any) => {
    const loading: boolean = useSelector(LOADING_SELECTOR);
    return (
      <>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color={"inherit"} />
        </Backdrop>
        <InnerComponent {...props} />
      </>
    );
  };
}

export default withLoader;
