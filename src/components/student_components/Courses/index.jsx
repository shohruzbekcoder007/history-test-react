import React, { useEffect, useState } from "react"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import AllInclusiveIcon from "@mui/icons-material/AllInclusive"
import DoneIcon from "@mui/icons-material/Done"
import { CoursesContainer } from "./styles"
import { all_groups, group_my_member } from './../../../API_urls'
import axios from "../../../baseUrl"
import CourseItem from "./CourseItem"
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'

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
        <BottomNavigationAction
          label="Barcha kurslar"
          icon={<AllInclusiveIcon />}
        />
        <BottomNavigationAction label="Azolik kutilmoqda" icon={<HourglassEmptyIcon />} />
      </BottomNavigation>
      {value===0?<MyCourses/>:<></>}
      {value===1?<AllCourses/>:<></>}
      {value===2?<RequestCourses/>:<></>}
    </>
  );
}

const AllCourses = () => {

  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    axios
        .get(
          all_groups,
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          );
          setAllCourses(response.data)
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, [])
  return (
    <CoursesContainer maxWidth="md">
      {
        allCourses.map((course, index) => (<CourseItem key={index} cours={course}/>))
      }
    </CoursesContainer>
  );
};

const MyCourses = () => {

  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    axios
        .get(
          group_my_member+"?status=ture",
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          );
          setAllCourses(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, [])
  return (
    <CoursesContainer maxWidth="md">
      {
        allCourses.map((course, index) => (<CourseItem key={index} cours={course}/>))
      }
    </CoursesContainer>
  );
};

const RequestCourses = () => {

  const [allCourses, setAllCourses] = useState([])

  useEffect(() => {
    axios
        .get(
          group_my_member+"?status=false",
          {
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          );
          setAllCourses(response.data)
          console.log(response.data)
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, [])
  return (
    <CoursesContainer maxWidth="md">
      {
        allCourses.map((course, index) => (<CourseItem key={index} cours={course}/>))
      }
    </CoursesContainer>
  );
};
