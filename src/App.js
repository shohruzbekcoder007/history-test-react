import React, { useState } from "react"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom"
import Main from "./components/Main"
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import themeDark from './theme/theme_dark'
import themeLight from './theme/theme_light'

function App() {

  const [dark, setDark] = useState(false)
  const changeTheme = (theme) => {
    setDark(theme)
  }

  return (
    <ThemeProvider theme={dark?themeDark:themeLight}>
      <CssBaseline />
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
