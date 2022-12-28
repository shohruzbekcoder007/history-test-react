import React, { useState, useEffect } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Typography from "@mui/material/Typography"
import axios from '../../../../utils/baseUrl'
import { grouplesson_lessonsforstudent } from '../../../../utils/API_urls'
import { CourseSrcWrapper } from "./styles"

export default function CourseSrc({ group_id }) {

  const [lessons, setLessons] = useState([])

  useEffect(() => {
    axios
      .get(grouplesson_lessonsforstudent + `?group_id=${group_id}`, {
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
  },[])

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
    </Accordion>
  )
}