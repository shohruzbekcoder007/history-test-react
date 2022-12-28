import React, { useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"
import SpeedDial from "@mui/material/SpeedDial"
import SpeedDialIcon from "@mui/material/SpeedDialIcon"
import SpeedDialAction from "@mui/material/SpeedDialAction"
import PostAddIcon from '@mui/icons-material/PostAdd'
import TextSnippetIcon from '@mui/icons-material/TextSnippet'
import Box from "@mui/material/Box"
import { CourseSrcWrapper } from "./styles"
import QuizIcon from '@mui/icons-material/Quiz'

export default function CourseSrc({ lessons }) {

  return (
      <CourseSrcWrapper>
        {
          lessons.map((lesson) => (
            <CourseSrcItem key={lesson._id} title={lesson.title} description={lesson.description}/>
          ))
        }
      </CourseSrcWrapper>
  );
}

export const CourseSrcItem = ({title, description}) => {
  const [open, setOpen] = useState(false)
  const actions = [
    { icon: <TextSnippetIcon />, name: "File" },
    { icon: <QuizIcon />, name: "Quiz" },
    { icon: <PostAddIcon />, name: "Post" }
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
        {
          open?
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>:
            <></>
        }
        
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