import React from "react";
import { Card, CardContent, Skeleton, Stack, Typography } from "@mui/material";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { SchoolOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { ProfileState } from "store/profile";

type TimelineProps = {
  profile: ProfileState;
  loading: boolean;
};

const typeIcons = {
  work: <WorkOutlineOutlined color={"info"} />,
  education: <SchoolOutlined color={"info"} />,
} as any;

function _Timeline(props: TimelineProps) {
  const { profile } = props;
  const { id, timeline = [] } = { ...profile };
  const loading = !id || props.loading;

  if (!loading && timeline.length === 0) {
    return (
      <Card
        sx={{
          borderRadius: 4,
          minHeight: 500,
          p: 4,
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            height: 500,
          }}
        >
          <Typography variant="h5" mt={2}>
            <strong>Let's Fill Up Your Timeline!</strong>
          </Typography>
          <Typography variant="body1">
            Hey there! Your timeline's looking a bit empty, but don't sweat it.
            This is where we start building your story! It's time to fill it up
            with your adventures, milestones, and achievements. Whether it's
            work projects, personal wins, or exciting moments, let's get them
            all on there. Think of it as your very own highlight reel – let's
            make it pop!
          </Typography>
        </Stack>
      </Card>
    );
  }

  return (
    <Card
      sx={{
        borderRadius: 4,
        pl: 2,
        maxHeight: 600,
        overflowY: "scroll",
      }}
    >
      <CardContent>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {loading ? (
            <>
              {Array.from(Array(4).keys()).map((key) => (
                <TimelineItem key={key}>
                  <TimelineSeparator>
                    <Skeleton width={32} height={32} variant="circular" />
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Skeleton variant="text" height={32} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width={100} />
                  </TimelineContent>
                </TimelineItem>
              ))}
              <TimelineItem>
                <TimelineSeparator>
                  <Skeleton width={32} height={32} variant="circular" />
                </TimelineSeparator>
                <TimelineContent>
                  <Skeleton variant="text" height={32} />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width={100} />
                </TimelineContent>
              </TimelineItem>
            </>
          ) : (
            <>
              {timeline.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="info">
                      {typeIcons[item.entryType]}
                    </TimelineDot>
                    {index < timeline.length - 1 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography variant="subtitle1">
                      <strong>
                        {item.title}, {item.place}
                      </strong>
                    </Typography>
                    {item.description && (
                      <Typography variant="body1">
                        {item.description}
                      </Typography>
                    )}
                    <Typography
                      variant="body2"
                      sx={{ mb: 2 }}
                      color={"text.secondary"}
                    >
                      {item.dateStart} - {item.dateEnd}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </>
          )}
        </Timeline>
      </CardContent>
    </Card>
  );
}

export default _Timeline;
