import React, { useEffect, useState, memo } from "react"
import { CoursesContainer } from "./styles"
import { group_my_member } from "./../../../API_urls"
import axios from "../../../baseUrl"
import CourseItemRemove from "./CourseItemRemove"

const MyCourses = memo(() => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    axios
      .get(group_my_member + "?status=true", {
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
        <CourseItemRemove key={index} cours={course.group_id} memberId={course._id} />
      ))}
    </CoursesContainer>
  );

});

export default MyCourses;
