import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import KeyIcon from '@mui/icons-material/Key';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from '@mui/material/Link';

const Login = () => {
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h4" textAlign="center">
        Resume Generator
      </Typography>
        <KeyIcon color="primary" style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop:"40px"
        }}/>
      <Typography component="h2" variant="h5" textAlign="center">
        Login
      </Typography>
      <form style = {{
         marginTop:"50px"
      }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          style={{
            marginTop:"10px"
          }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          style={{
            marginTop:"10px"
          }}
        >
          Login
        </Button>
      </form>
      <Link onClick={() => navigate("/signup")}>if you do not have an account</Link>
    </Container>
  )
};


export default Login;