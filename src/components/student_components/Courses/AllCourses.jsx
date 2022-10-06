import React, { useEffect, useState, memo } from "react";
import { CoursesContainer } from "./styles";
import { all_groups } from "../../../utils/API_urls";
import axios from "../../../utils/baseUrl";
import CourseItem from "./CourseItem";

const AllCourses = memo(() => {
  
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get(all_groups, {
        headers: {
          "x-auth-token": sessionStorage.getItem("x-auth-token"),
        },
      })
      .then((response) => {
        sessionStorage.setItem(
          "x-auth-token",
          response.headers["x-auth-token"]
        );
        setAllCourses(response.data);
      })
      .catch((error) => {
        console.log({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <CoursesContainer maxWidth="md">
      {allCourses.map((course, index) => (
        <CourseItem key={index} course={course} />
      ))}
      
    </CoursesContainer>
  );
});

export default AllCourses;
