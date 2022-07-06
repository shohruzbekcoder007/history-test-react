import React from "react";
import { CourseHeader, CourseText, CourseFooter } from "./styles";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));


export default function CourseItem({ cours }) {

  return (
    <CourseInfo>
      <CourseHeader>{cours.group_name}</CourseHeader>
      <CourseText>{cours.group_text}</CourseText>
      <CourseFooter>
        <p>
          <span>12</span> ta student <span>4</span> ta qo'llanma
        </p>
      </CourseFooter>
    </CourseInfo>
  );
}
