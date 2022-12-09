import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import SaveAsRoundedIcon from "@mui/icons-material/SaveAsRounded";
import TransitEnterexitRoundedIcon from "@mui/icons-material/TransitEnterexitRounded";
import { CourseHeader, CourseText, CourseFooter } from "../styles";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const CourseInfo = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  boxShadow: theme.shadows[10],
  marginBottom: "20px",
}));

const ariaLabel = { "aria-label": "description" };

export default function CourseItem({ cours }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit ? (
        <CourseItemEdit cours={cours} edit={edit} setEdit={setEdit} />
      ) : (
        <CourseItemInfo cours={cours} edit={edit} setEdit={setEdit} />
      )}
    </>
  );
}

export const CourseItemInfo = ({ cours, edit, setEdit }) => {
  
  return (
    <CourseInfo>
      <Link 
        // to="course"
        to="/teacher/course"
        state={{ course: cours }}
      >
        <CourseHeader>
          {cours.group_name}
        </CourseHeader>
      </Link>
      <CourseText>{cours.group_text}</CourseText>
      <CourseFooter>
        <p>
          <span>{cours.number_of_students}</span> ta student <span>{cours.number_of_maretials}</span> ta qo'llanma
        </p>
        <IconButton
          color="primary"
          aria-label="add an alarm"
          onClick={(_) => {
            setEdit(!edit);
          }}
        >
          <ModeEditOutlineRoundedIcon />
        </IconButton>
      </CourseFooter>
    </CourseInfo>
  );
};

export const CourseItemEdit = ({ cours, edit, setEdit }) => {
  return (
      <CourseInfo>
        <Input
          defaultValue={cours.group_name}
          inputProps={ariaLabel}
          style={{ width: "100%" }}
        />
        <TextField
          id={`standard-multiline-static`}
          // multiline
          multiline={false}
          defaultValue={cours.group_text}
          variant="standard"
          style={{ width: "100%" }}
        />
        <CourseFooter>
          <p>
            <span>{cours.number_of_students}</span> ta student <span>{cours.number_of_maretials}</span> ta qo'llanma
          </p>
          <div>
            <IconButton
              color="primary"
              aria-label="add an alarm"
              onClick={(_) => {
                setEdit(!edit);
              }}
            >
              <SaveAsRoundedIcon />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="add an alarm"
              onClick={(_) => {
                setEdit(!edit);
              }}
            >
              <TransitEnterexitRoundedIcon />
            </IconButton>
          </div>
        </CourseFooter>
      </CourseInfo>
  );
};
