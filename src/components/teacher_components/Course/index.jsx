import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import CourseSrc from "./CourseSrc"
import { useLocation } from 'react-router-dom'
import TabsStudents from "./TabsStudents"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined"
import ShareIcon from "@mui/icons-material/Share"
import OldLesssons from "./OldLesssons"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  height: `calc(100vh - 160px)`,
  overflow: "auto",
}));

export default function Course() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const params = useLocation()
  const { state } = params
  const actions = [
    { icon: <FileCopyIcon />, name: "Yangi yaratish" },
    { icon: <ShareIcon onClick={handleClickOpen} />, name: "Avvalgilarni ulashish" },
  ];

  return (
    <>
      <Typography variant="h6" gutterBottom component="div">
        {`${state?.course?.group_name} - ${state?.course?.number_of_maretials} ${'ta material'} , ${state?.course?.number_of_students} ${'ta student'}`}
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            <Item>
              <CourseSrc group_id={state?.course?._id}/>
            </Item>
            <Box
                sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
              >
                <OldLesssons open={open} handleClose={handleClose}/>
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
              <TabsStudents group_id={state?.course?._id} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
