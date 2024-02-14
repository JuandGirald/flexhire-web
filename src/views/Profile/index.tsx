import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_KEY_SELECTOR } from "store/selectors/auth";
import { PROFILE_SELECTOR } from "store/selectors/profile";
import { LOADING_SELECTOR } from "store/selectors/ui";
import ProfileView from "./view";
import ApiKeyDialog from "components/ApiKeyDialog";
import withLoader from "hoc/withLoader";
import useProfileService from "services/profile";
import { CableContext } from "api/cable";

function _Profile() {
  const apiKey = useSelector(API_KEY_SELECTOR);
  const loading = useSelector(LOADING_SELECTOR);
  const profile = useSelector(PROFILE_SELECTOR);

  const [apiKeyDialog, setApiKeyDialog] = useState<boolean>(!apiKey);
  const service = useProfileService();
  const actionCable = useContext(CableContext);

  const fetch = async () => {
    apiKey && service.fetchProfile(apiKey);
  };

  const openApiKeyDialog = () => {
    setApiKeyDialog(true);
  };

  const handleCloseApiKeyDialog = () => {
    setApiKeyDialog(false);
  };

  useEffect(() => {
    if (apiKey) {
      fetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiKey]);

  useEffect(() => {
    if (profile?.id) {
      try {
        actionCable.cable.subscriptions.create(
          {
            channel: "SignalsChannel",
            user_id: profile?.id,
          },
          {
            received: (data: any) => {
              if (data === "1") {
                fetch();
              }
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.id]);

  return (
    <>
      <ApiKeyDialog
        open={apiKeyDialog}
        closeable={!!apiKey}
        handleClose={handleCloseApiKeyDialog}
      />
      <ProfileView
        openApiKeyDialog={openApiKeyDialog}
        profile={profile}
        loading={loading}
      />
    </>
  );
}

export default withLoader(_Profile);
