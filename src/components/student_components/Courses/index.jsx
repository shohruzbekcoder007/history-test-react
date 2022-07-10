import React from "react"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"
import DoneIcon from "@mui/icons-material/Done"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyCourses from "./MyCourses"
import AllCourses from "./AllCourses"
import RequestCourses from "./RequestCourses"

export default function Courses() {

  const [value, setValue] = React.useState(0);

  return (
    <>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ backgroundColor: "transparent" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Mening kurslarim" icon={<DoneIcon />} />
        <BottomNavigationAction label="Barcha kurslar" icon={<AllInclusiveIcon />} />
        <BottomNavigationAction label="Azolik kutilmoqda" icon={<HourglassEmptyIcon />} />
      </BottomNavigation>
      {value===0&&<MyCourses/>}
      {value===1&&<AllCourses/>}
      {value===2&&<RequestCourses/>}
    </>
  );
}





