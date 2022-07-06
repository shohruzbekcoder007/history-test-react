import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CourseSrc from "../CourseSrc";
import CourseStudents from "../CourseStudents";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "100%",
  maxHeight: "600px",
  overflow: "auto",
}));

export default function Course() {

  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        Course name (va malumotlar)
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={8}>
            Manbalar
            <Item>
              <CourseSrc />
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            students
            <Item>
              <CourseStudents />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
