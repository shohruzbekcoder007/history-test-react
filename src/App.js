import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Main from "./components/common_components/Main";
import SignIn from "./components/common_components/SignIn";
import SignUp from "./components/common_components/SignUp";
import Courses from "./components/teacher_components/Courses";
import CoursesStudent from "./components/student_components/Courses";
import StudentMain from "./components/student_components/Main";
import TeacherMain from "./components/teacher_components/Main";
import Students from "./components/teacher_components/Students";

function App() {
  const theme = useSelector((state) => state.theme);
  const user = useSelector((state) => state.user);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {sessionStorage.getItem("x-auth-token") && (
          <Route path="/" element={<Main />}>
            <Route path="student" element={<StudentMain/>}>
              <Route index element={<CoursesStudent />} />
              <Route path="nimadir" element={<p>nimadir</p>} />
            </Route>
            <Route path="teacher" element={<TeacherMain />}>
              <Route index element={<Courses />} />
              <Route path="students" element={<Students/>} />
              <Route path="natijalar" element={<p>natijalar</p>} />
            </Route>
          </Route>
        )}
        <Route path="login" element={<SignIn />} />
        <Route path="reg" element={<SignUp />} />
        <Route path="*" element={<Navigate to={user ? "/" : "login"} />} />
      </Routes>
    </ThemeProvider>
  );
}

// https://mui.com/store/previews/minimal-dashboard-free/
// https://editor.webself.net/review/3242867f645e4fd78593befbf0636272
// https://learning.edx.org/course/course-v1:LinuxFoundationX+LFS141x+1T2021/block-v1:LinuxFoundationX+LFS141x+1T2021+type@sequential+block@6c88be7d128d4a42ba97a4fb6baea17e/block-v1:LinuxFoundationX+LFS141x+1T2021+type@vertical+block@b7586c94b2ee4e7dbac162845e788d58
// https://www.howtographql.com/basics/1-graphql-is-the-better-rest/

export default App;