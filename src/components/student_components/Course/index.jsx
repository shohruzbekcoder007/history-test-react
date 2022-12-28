import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Link, useLocation } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall'
import ChatIcon from '@mui/icons-material/Chat'
import CourseSrc from "./CourseSrc"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  // padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: `calc(100vh - 120px)`,
  overflow: "auto",
  position: "relative",
}));

export default function Course() {

  const params = useLocation()
  const { state } = params

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Item>
              <Paper
                elevation={3}
                square
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {`${state?.course?.group_name} - ${state?.course?.number_of_maretials} ${'ta material'} , ${state?.course?.number_of_students} ${'ta student'}`}
                  </Typography>
                  <Link
                    to="/student/course/chat"
                    state={state?.course}
                  >
                    <IconButton size="large" aria-label="show 4 new mails" color="primary">
                      <ChatIcon />
                    </IconButton>
                  </Link>
                  <IconButton size="large" aria-label="show 4 new mails" color="primary">
                    <MissedVideoCallIcon />
                  </IconButton>
                </Toolbar>
              </Paper>
              <CourseSrc group_id={state?.course?._id} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
