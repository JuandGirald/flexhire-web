import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  IconButton,
  Skeleton,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import {
  Share as ShareIcon,
  GitHub as GithubIcon,
  LinkedIn as LinkedInIcon,
  SportsBasketball as DribbbleIcon,
  CommentBank as BlogIcon,
  VerifiedUser as VerifiedIcon,
  GppBad as UnverifiedIcon,
} from "@mui/icons-material";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ProfileState } from "store/profile";
import { capitalize } from "utils/string";

type BioInfoProps = {
  profile: ProfileState;
  loading: boolean;
};

function BioInfo(props: BioInfoProps) {
  const { profile: data } = props;
  const { id, name, avatarUrl, verified, skills, profile } = { ...data };
  const loading = !id || props.loading;
  const [open, setOpen] = useState<boolean>(true);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={() => setOpen(false)}
        message="Copied to clipboard."
      />
      <Card sx={{ p: 2, borderRadius: 4 }}>
        <CardHeader
          sx={{ pb: 0, pt: 1 }}
          action={
            loading ? (
              <Skeleton variant="rounded" width={100} height={24} />
            ) : (
              <Chip
                icon={verified ? <VerifiedIcon /> : <UnverifiedIcon />}
                label={verified ? "Verified" : "Unverified"}
                color={verified ? "success" : undefined}
                size="small"
              />
            )
          }
        />
        <CardContent sx={{ mt: 0 }}>
          <Stack>
            <Stack direction="row" spacing={3}>
              {loading ? (
                <Skeleton
                  variant="circular"
                  width={100}
                  height={100}
                  animation="wave"
                />
              ) : (
                <Avatar
                  alt={name}
                  src={avatarUrl}
                  sx={{ width: 100, height: 100 }}
                />
              )}

              <Stack justifyContent="center" sx={{ flex: 1 }}>
                <Typography variant="h4">
                  {loading ? (
                    <>
                      <Skeleton variant="text" animation="wave" />
                    </>
                  ) : (
                    <strong>{name}</strong>
                  )}
                </Typography>
                <Typography variant="body1" color={"text.secondary"}>
                  {loading ? (
                    <>
                      {Array.from(Array(2).keys()).map((key) => (
                        <Skeleton variant="text" animation={"wave"} key={key} />
                      ))}
                    </>
                  ) : (
                    <Stack pl={1}>
                      <strong>
                        {profile?.industry.name}
                        {profile?.industry && profile?.rate ? " - " : ""}
                        {profile?.jobTypes?.map(capitalize).join(" or ")}
                        {" from "}
                        {profile?.rate.formatted}/h
                      </strong>
                      {(profile?.totalExperience || 0) > 0 && (
                        <span>{`${profile?.totalExperience} years experience (on Flexhire)`}</span>
                      )}
                    </Stack>
                  )}
                </Typography>
              </Stack>
            </Stack>
            <Typography variant="body1" mt={3} paragraph color="text.secondary">
              {loading ? (
                <>
                  {Array.from(Array(4).keys()).map((key) => (
                    <Skeleton variant="text" animation={"wave"} key={key} />
                  ))}
                </>
              ) : (
                profile?.intro
              )}
            </Typography>

            <Grid container spacing={1} columnGap={1} rowGap={1} mt={1}>
              {loading ? (
                <>
                  {Array.from(Array(4).keys()).map((key) => (
                    <Skeleton
                      variant="rounded"
                      width={100}
                      height={24}
                      key={key}
                    />
                  ))}
                </>
              ) : (
                skills.map((item, index) => (
                  <Chip
                    label={`${item.skill.name} ${item.experience}+ yrs`}
                    color={"info"}
                    size="small"
                    key={index}
                  />
                ))
              )}
            </Grid>
          </Stack>
        </CardContent>
        <CardActions disableSpacing>
          {loading ? (
            <Stack direction={"row"} spacing={1}>
              {Array.from(Array(5).keys()).map((key) => (
                <Skeleton
                  variant="circular"
                  width={32}
                  height={32}
                  animation={"wave"}
                  key={key}
                />
              ))}
            </Stack>
          ) : (
            <>
              {profile?.slug && (
                <CopyToClipboard
                  text={`https://www.flexhire.com/${profile?.slug}`}
                  onCopy={() => setOpen(true)}
                >
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CopyToClipboard>
              )}
              {profile?.urlGithub && (
                <IconButton
                  aria-label="github"
                  href={profile?.urlGithub}
                  target="_blank"
                >
                  <GithubIcon />
                </IconButton>
              )}
              {profile?.urlLinkedin && (
                <IconButton
                  aria-label="linkedin"
                  href={profile?.urlLinkedin}
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              )}
              {profile?.urlDribbble && (
                <IconButton
                  aria-label="dribbble"
                  href={profile?.urlDribbble}
                  target="_blank"
                >
                  <DribbbleIcon />
                </IconButton>
              )}
              {profile?.urlBlog && (
                <IconButton
                  aria-label="blog"
                  href={profile?.urlBlog}
                  target="_blank"
                >
                  <BlogIcon />
                </IconButton>
              )}
            </>
          )}
        </CardActions>
      </Card>
    </>
  );
}

export default BioInfo;
