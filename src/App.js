import React from "react"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Main from "./components/Main"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
      contrastText: "#fff"
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
          <Route path="login" element={<SignIn/>} />
          <Route path="reg" element={<SignUp/>} />
          <Route path="/" element={<Main/>} />
          <Route path="*" element={<Navigate to="/login"/>}/>
      </Routes>
    </ThemeProvider>
  )
}

// https://mui.com/store/previews/minimal-dashboard-free/

export default App;
