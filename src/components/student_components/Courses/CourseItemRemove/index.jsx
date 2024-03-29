import React from "react"
import { CourseHeader, CourseText, CourseFooter } from "../styles"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import { member_remove } from "../../../../utils/API_urls"
import axios from "../../../../utils/baseUrl"
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import listLanguage from "./language.json"

const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));


export default function CourseItem({ cours, memberId }) {

  const language = useSelector((state) => state.language)

  const removeCourse = () => {
    axios
        .delete(
          member_remove,
          {
            data: {
              _id: memberId
            },
            headers: {
              "x-auth-token": sessionStorage.getItem("x-auth-token"),
            },
          }
        )
        .then((response) => {
          sessionStorage.setItem(
            "x-auth-token",
            response.headers["x-auth-token"]
          )
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error.response.data);
        })
  }

  return (
    <>
    <CourseInfo>
    <Link 
        to="/student/course"
        state={{ course: cours }}
      >
        <CourseHeader>{cours.group_name}</CourseHeader>
      </Link>
      <CourseText>{cours.group_text}</CourseText>
      <CourseFooter>
        <p>
          <span>{cours.number_of_students}</span> {listLanguage.student[language]} <span>{cours.number_of_maretials}</span> {listLanguage.manual[language]}
        </p>
        <IconButton
          color="primary"
          aria-label="add an alarm"
          onClick={(_) => {
            removeCourse()
          }}
        >
          <PersonRemoveAlt1Icon />
        </IconButton>
      </CourseFooter>
    </CourseInfo>
  </>
  );
}
