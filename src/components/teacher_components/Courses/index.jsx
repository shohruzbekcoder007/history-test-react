import React, { useEffect, useState } from "react"
import CourseItem from "./CourseItem"
import { AddCourse, CoursesContainer } from "./styles"
import axios from "../../../baseUrl"
import { my_groups } from '../../../API_urls'
import IconButton from '@mui/material/IconButton'
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded'
import { NewCourseItem } from "./NewCourseItem"
import Typography from '@mui/material/Typography';

export default function Courses() {

  const [courses, setCourses] = useState([])
  const [newCourse, setNewCourse] = useState(false)
  const [addCourse, setAddCourse] = useState(false)

  useEffect(() => {
      axios
        .get(
          my_groups,
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
          setCourses(response.data)
          
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
  }, [addCourse]);

  return (
    <CoursesContainer maxWidth="md">
      {
        newCourse?
        <NewCourseItem newCourse={newCourse} setNewCourse={setNewCourse} addCourse={addCourse} setAddCourse={setAddCourse}/>:
        <AddCourse>
          <IconButton
            aria-label="add" color="primary"
            sx={{ width: "50px", height: "50px" }}
            onClick={(_) => {
              setNewCourse(!newCourse)
            }}
          >
            <AddCircleRoundedIcon fontSize="large" />
          </IconButton>
        </AddCourse>
      }
      {
        courses.length?courses.map((cours, index) => {
          return <CourseItem key={index} cours={cours}/>
        }):
        <Typography variant="h6" gutterBottom component="div">
          Sizda hozida guruhlar mavjud emas yangi gruruh tashkil qilish uchun + tugmasini bosing!!!
        </Typography>
      }
    </CoursesContainer>
  );
}
