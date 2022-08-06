import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

export default createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: green[500],
        contrastText: "#fff"
      },
      background: {
        paper: "rgb(249, 250, 251)",
        default: "rgb(249, 250, 251)"
      },
      shape: {
        borderRadius: "8px"
      }
    },
    shape: {
      borderRadius: 8,
    }
  });