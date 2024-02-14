import React from "react";
import { Card, Skeleton } from "@mui/material";
import { ProfileState } from "store/profile";

type VideoIntroProps = {
  profile: ProfileState;
  loading: boolean;
};

function VideoIntro(props: VideoIntroProps) {
  const { profile: data } = props;
  const { id, video } = { ...data };
  const loading = !id || props.loading;

  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
          backgroundColor: loading ? "white" : "black",
          minHeight: 250,
        }}
      >
        {loading ? (
          <>
            <Skeleton variant="rectangular" height={250} animation="wave" />
          </>
        ) : (
          <video
            src={video?.optimizedUrl}
            poster={video?.posterUrl}
            controls
            style={{ width: "100%" }}
          />
        )}
      </Card>
    </>
  );
}

export default VideoIntro;
