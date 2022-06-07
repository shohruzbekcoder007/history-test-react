import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

export default createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: green[500],
        contrastText: "#fff"
      },
    },
  });