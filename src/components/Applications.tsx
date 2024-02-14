import React from "react";
import {
  Card,
  Chip,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Check, X, Edit } from "@mui/icons-material";
import { ProfileState } from "store/profile";

type ApplicationsProps = {
  profile: ProfileState;
  loading: boolean;
};

const statusLabels = {
  job_application_sent: "Sent",
  job_application_draft: "Draft",
  rejected: "Rejected",
} as any;

const statusColors = {
  job_application_sent: "success",
  job_application_draft: "info",
  rejected: "danger",
} as any;

const statusIcons = {
  job_application_sent: <Check />,
  job_application_draft: <Edit />,
  rejected: <X />,
} as any;

function Applications(props: ApplicationsProps) {
  const { profile } = props;
  const { id, applications = {} } = { ...profile };
  const { totalCount = 0, data = [] } = { ...applications };
  const loading = !id || props.loading;

  const TableValue = ({ value, ...rest }: any) => (
    <TableCell {...rest}>
      {loading ? <Skeleton variant="rounded" height={24} /> : value}
    </TableCell>
  );

  if (!loading && totalCount === 0) {
    return (
      <Card
        sx={{
          borderRadius: 4,
          minHeight: 300,
          p: 4,
        }}
      >
        <Stack
          sx={{
            justifyContent: "center",
            height: 300,
          }}
        >
          <Typography variant="h5" mt={2}>
            <strong>Let's Get You Hired!</strong>
          </Typography>
          <Typography variant="body1">
            Alrighty, champ! Time to dive into the job hunt! This empty space is
            your launching pad to success. Start browsing, applying, and let's
            kickstart your career journey together. Ready, set, go!
          </Typography>
        </Stack>
      </Card>
    );
  }

  return (
    <TableContainer
      component={Card}
      title="Job Applications"
      sx={{ borderRadius: 4 }}
    >
      <Table sx={{ minWidth: 500 }} aria-label="applications table">
        <TableHead>
          <TableRow>
            <TableValue value={"Job Title"} />
            <TableValue value={"Company"} />
            <TableValue value={"Hiring Manager"} />
            <TableValue align="center" value={"Status"} />
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            Array.from(Array(5).keys()).map((row) => (
              <TableRow key={row}>
                {Array.from(Array(4).keys()).map((key) => (
                  <TableValue key={key} />
                ))}
              </TableRow>
            ))
          ) : (
            <>
              {data.map(({ node: row }: any, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.job?.title}
                  </TableCell>
                  <TableCell>{row.firm?.name || row.client?.name}</TableCell>
                  <TableCell>
                    {row.hiringManager?.name || row.client?.name}
                  </TableCell>
                  <TableCell align="center">
                    <Chip
                      icon={statusIcons[row.status]}
                      label={statusLabels[row.status]}
                      color={statusColors[row.status]}
                      size="small"
                      sx={{ minWidth: 80 }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Applications;
