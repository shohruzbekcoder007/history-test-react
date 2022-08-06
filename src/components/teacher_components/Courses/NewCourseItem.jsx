import React, { useState } from "react"
import IconButton from "@mui/material/IconButton"
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded"
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded"
import { CourseFooter } from "./styles"
import Input from "@mui/material/Input"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import Paper from "@mui/material/Paper"
import axios from "../../../utils/baseUrl"
import { group } from "../../../utils/API_urls"

const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));

const ariaLabel = { "aria-label": "description" };

export function NewCourseItem({ newCourse, setNewCourse, addCourse, setAddCourse }){
    const [group_name, setGroupName] = useState("")
    const [group_text, setGroupTtext] = useState("")

    const createCourse = (event) => {
        axios
        .post(
            group,
            {
                group_name: group_name,
                group_text: group_text
            },
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
          setAddCourse(!addCourse)
          setNewCourse(!newCourse)
          console.log(response.data)
          
        })
        .catch((error) => {
          console.log({ errorMessage: error.toString() });
          console.error("There was an error!", error);
        });
    }

    return (
        <CourseInfo>
          <Input
            defaultValue={"new course name"}
            inputProps={ariaLabel}
            style={{ width: "100%" }}
            onChange={(event) => {setGroupName(event.target.value)}}
          />
          <TextField
            id={`standard-multiline-static`}
            // multiline
            multiline={false}
            defaultValue={"cours.group_text"}
            variant="standard"
            style={{ width: "100%" }}
            onChange={(event) => {setGroupTtext(event.target.value)}}
          />
      <CourseFooter>
        <p>
          <span>12</span> ta student <span>4</span> ta qo'llanma
        </p>
          <div>
            <IconButton
              color="primary"
              aria-label="add an alarm"
              onClick={createCourse}
            >
              <SaveAsRoundedIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add an alarm"
              onClick={(_) => {
                setNewCourse(!newCourse);
              }}
            >
              <TransitEnterexitRoundedIcon />
            </IconButton>
          </div>
      </CourseFooter>
    </CourseInfo>
    )
}
