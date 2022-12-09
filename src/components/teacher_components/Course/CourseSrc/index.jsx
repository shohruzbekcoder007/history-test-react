import React, { useState, useEffect } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined"
import SaveIcon from "@mui/icons-material/Save"
import PrintIcon from "@mui/icons-material/Print"
import ShareIcon from "@mui/icons-material/Share"
import Box from "@mui/material/Box"
import axios from '../../../../utils/baseUrl'
import { grouplesson_lessons } from '../../../../utils/API_urls'


export default function CourseSrc({ group_id }) {

  const [lessons, setLessons] = useState([])

  useEffect(() => {
    axios
      .get(grouplesson_lessons + `?group_id=${group_id}`, {
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
        console.log(response.data, "<--")
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  },[])

  return (
    <>
      <p>bu yerda header bo'ladi brat</p>
      {
        lessons.map((lesson) => (
          <CourseSrcItem key={lesson._id} title={lesson.title} description={lesson.description}/>
        ))
      }
    </>
  );
}

export const CourseSrcItem = ({title, description}) => {
  const [open, setOpen] = useState(false)
  const actions = [
    { icon: <FileCopyIcon />, name: "Copy" },
    { icon: <SaveIcon />, name: "Save" },
    { icon: <PrintIcon />, name: "Print" },
    { icon: <ShareIcon />, name: "Share" },
  ];
  return (
    <Accordion
      expanded={open}
      onChange={(_) => { setOpen(!open) }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
      <Box
        sx={{ transform: "translateZ(0px)", flexGrow: 1 }}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ marginBottom: '10px', marginRight: '10px' }}
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
    </Accordion>
  )
}