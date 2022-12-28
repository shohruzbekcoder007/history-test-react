import React from 'react'
import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"

export default function CourseAndStudentChat() {
  return (
    <Box sx={{ flexGrow: 1, height: `calc(100vh - 120px)` }}>
        <Outlet/>
    </Box>
  )
}