import React, { useState, useEffect } from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CourseSrc from "./CourseSrc"
import { Link, useLocation } from 'react-router-dom'
import TabsStudents from "./TabsStudents"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined"
import ShareIcon from "@mui/icons-material/Share"
import OldLesssons from "./OldLesssons"
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MissedVideoCallIcon from '@mui/icons-material/MissedVideoCall'
import ChatIcon from '@mui/icons-material/Chat'
import NewLesson from "./NewLesson"
import { grouplesson_lessons } from '../../../utils/API_urls'
import axios from '../../../utils/baseUrl'

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

  const [open, setOpen] = useState(false);
  const [openNewLesson, setOpenNewLesson] = useState(false)
  const [course, setCourse] = useState(state.course)
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    axios
      .get(grouplesson_lessons + `?group_id=${course._id}`, {
        headers: {
          "x-auth-token": sessionStorage.getItem("x-auth-token"),
        },
      })
      .then((response) => {
        sessionStorage.setItem(
          "x-auth-token",
          response.headers["x-auth-token"]
        );
        setLessons(response.data)
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, [course])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenNewLesson = () => {
    setOpenNewLesson(true);
  };

  const handleCloseNewLesson = () => {
    setOpenNewLesson(false);
  };

  const actions = [
    { icon: <FileCopyIcon onClick={handleClickOpenNewLesson} />, name: "Yangi yaratish" },
    { icon: <ShareIcon onClick={handleClickOpen} />, name: "Avvalgilarni ulashish" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <Item>
              <Paper
                elevation={3}
                square
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {`${course.group_name} - ${course.number_of_maretials} ${'ta material'} , ${course.number_of_students} ${'ta student'}`}
                  </Typography>
                  <Link
                    to="/teacher/course/chat"
                    state={course}
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
              <CourseSrc lessons={lessons} />
            </Item>
            <Box
              sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
            >
              <OldLesssons open={open} handleClose={handleClose} />
              <NewLesson open={openNewLesson} handleClose={handleCloseNewLesson} group_id={course._id} setCourse={setCourse} />
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
                direction="left"
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                  />
                ))}
              </SpeedDial>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Item>
              <TabsStudents group_id={course._id} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}