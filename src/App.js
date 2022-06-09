import React from "react"
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
import { useSelector } from 'react-redux'

function App() {

  const theme = useSelector(state => state.theme)

  return (
    <ThemeProvider theme={theme}>
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
// https://editor.webself.net/review/3242867f645e4fd78593befbf0636272

export default App;