import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Grid  from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate();
  const handlCreateAccount = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector("[name='name']").value;
    const email = form.querySelector("[name='email']").value;
    const passward = form.querySelector("[name='passward']").value;
    const tel = form.querySelector("[name='tel']").value;
    axios.post('/api/v1/users/',{
      name:name,
      email:email,
      passward:passward,
      tel:tel
    })
    .then(() => {
      window.confirm("Your account is created!!");
      navigate("/");
    })
    .catch((e) => alert(e));
  }

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h2" variant="h5" textAlign="center" style = {{
         marginTop:"30px"
      }}>
        Signup
      </Typography>
      <form onSubmit={handlCreateAccount}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                style = {{
                  marginTop:"50px"
               }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="passward"
                label="Passward"
                type="password"
                id="passward"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="tel"
                label="Phone Number"
                type="number"
                id="tel"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style = {{
              marginTop:"30px"
           }}
          >
            Sign Up
          </Button>
        </form>
      <Link onClick={() => navigate("/")}>if you already have an account</Link>
    </Container>
  )
};


export default Signup;