import React from "react";
import { LockPerson } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import BioInfo from "components/BioInfo";
import { ProfileState } from "store/profile";
import VideoIntro from "components/VideoIntro";
import Applications from "components/Applications";
import Timeline from "components/Timeline";

type ProfileViewProps = {
  openApiKeyDialog: () => void;
  profile: ProfileState;
  loading: boolean;
};

function ProfileView(props: ProfileViewProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar>
        <Stack direction={"row-reverse"}>
          <Toolbar>
            <IconButton color="inherit" onClick={props.openApiKeyDialog}>
              <LockPerson />
              <Typography variant="button" sx={{ ml: 1 }}>
                Authorize
              </Typography>
            </IconButton>
          </Toolbar>
        </Stack>
      </AppBar>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <BioInfo profile={props.profile} loading={props.loading} />
                <Applications profile={props.profile} loading={props.loading} />
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                <VideoIntro profile={props.profile} loading={props.loading} />
                <Timeline profile={props.profile} loading={props.loading} />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default ProfileView;
