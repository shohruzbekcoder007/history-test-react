import React, { useState } from 'react'
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
import axios from "../../../utils/baseUrl"
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { setUser } from '../../../redux/action/userActions'
import { user } from "../../../utils/API_urls"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import listLanguage from './language.json'


export default function SignUp() {

  let navigate = useNavigate()
  const dispatch = useDispatch()
  const [isAdmin, setIsAdmin] = useState(false)
  const language = "ru"

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios.post(
      user,
      {
        name: data.get('username'),
        email: data.get('email'),
        password: data.get('password'),
        isAdmin
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
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 3,
            padding: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {listLanguage.sign_up[language]}
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label={listLanguage.user_name[language]}
                  name="username"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={listLanguage.email_address[language]}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={listLanguage.password[language]}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" onChange={(event) => {setIsAdmin(!isAdmin)}} />}
                  label={listLanguage.status[language]}
                />
              </Grid>
              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {listLanguage.sign_up_btn[language]}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/log" variant="body2">
                  {listLanguage.link[language]}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}