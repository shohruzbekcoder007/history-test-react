import React from "react"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"
import DoneIcon from "@mui/icons-material/Done"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import MyCourses from "./MyCourses"
import AllCourses from "./AllCourses"
import RequestCourses from "./RequestCourses"
import { useSelector } from "react-redux"
import listLanguage from "./language.json"
import { styled } from "@mui/material/styles"

const BottomNavigationWithMargin = styled(BottomNavigation)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export default function Courses() {

  const [value, setValue] = React.useState(0);
  const language = useSelector((state) => state.language)

  return (
    <>
      <BottomNavigationWithMargin
        showLabels
        value={value}
        sx={{ backgroundColor: "transparent" }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label={listLanguage.tub1[language]} icon={<DoneIcon />} />
        <BottomNavigationAction label={listLanguage.tub2[language]} icon={<AllInclusiveIcon />} />
        <BottomNavigationAction label={listLanguage.tub3[language]} icon={<HourglassEmptyIcon />} />
      </BottomNavigationWithMargin>
      {value===0&&<MyCourses/>}
      {value===1&&<AllCourses/>}
      {value===2&&<RequestCourses/>}
    </>
  );
}





