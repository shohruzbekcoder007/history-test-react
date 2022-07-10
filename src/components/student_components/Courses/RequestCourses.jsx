import React, { useEffect, useState, memo } from "react";
import { CoursesContainer } from "./styles";
import { group_my_member } from "./../../../API_urls";
import axios from "../../../baseUrl";
import CourseItem from "./CourseItem";

const RequestCourses = memo(() => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get(group_my_member + "?status=false", {
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
        <CourseItem key={index} cours={course.group_id} />
      ))}
    </CoursesContainer>
  );
});

export default RequestCourses;
