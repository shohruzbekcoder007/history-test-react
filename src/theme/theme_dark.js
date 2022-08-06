import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

export default createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: green[500],
        contrastText: "#fff"
      },
    },
    shape: {
      borderRadius: 8,
    }
  });