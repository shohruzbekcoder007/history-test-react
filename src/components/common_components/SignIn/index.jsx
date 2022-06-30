import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import axios from '../../../baseUrl'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/action/userActions'
import { user_login } from '../../../API_urls'
import listLanguage from './language.json'

export default function SignIn() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const language = "ru"

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post(
      user_login,
      {
        email: data.get('email'),
        password: data.get('password'),
      }
    )
    .then((response) => {
      sessionStorage.setItem('x-auth-token', response.headers['x-auth-token'])
      dispatch(setUser(response.data))
      if(response.data.isAdmin){
        navigate('/teacher')
      }
      if(!response.data.isAdmin){
        navigate('/student')
      }
    })
    .catch((error) => {
      console.log({ errorMessage: error.toString() });
      console.error("There was an error!", error);
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            padding: 2,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {listLanguage.sign_in[language]}
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={listLanguage.email_address[language]}
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={listLanguage.password[language]}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {listLanguage.sign_in_btn[language]}
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to="/reg" variant="body2">
                  {listLanguage.link[language]}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
  );
}