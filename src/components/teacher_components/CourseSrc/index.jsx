import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import Box from "@mui/material/Box";

export default function CourseSrc() {

  return (
    <>
      <CourseSrcItem/>
      <CourseSrcItem/>
      <CourseSrcItem/>
      <CourseSrcItem/>
      <CourseSrcItem/>
      <CourseSrcItem/>
    </>
  );
}


export const CourseSrcItem = () => {
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
        onChange={(_) => {setOpen(!open)}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            I am an accordion
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
        <Box
                sx={{transform: "translateZ(0px)", flexGrow: 1 }}
              >
                <SpeedDial
                  ariaLabel="SpeedDial basic example"
                  sx={{ marginBottom: '5px', marginRight: '5px' }}
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