import React from "react"
import { CourseHeader, CourseText, CourseFooter } from "./styles"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import IconButton from "@mui/material/IconButton"
import { member_remove } from '../../../API_urls'
import axios from "../../../baseUrl"
import PersonRemoveAlt1Icon from '@mui/icons-material/PersonRemoveAlt1'

const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));


export default function CourseItem({ cours, memberId }) {

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
      <CourseHeader>{cours.group_name}</CourseHeader>
      <CourseText>{cours.group_text}</CourseText>
      <CourseFooter>
        <p>
          <span>{cours.number_of_students}</span> ta student <span>{cours.number_of_maretials}</span> ta qo'llanma
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
