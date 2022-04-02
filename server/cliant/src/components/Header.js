import React, { useContext } from "react";
import { LOGOUT } from "../action";
import AppContext from "../context";
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  const handlLogout = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGOUT,
    });

    navigate("/login");
  };

  return (<Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Resume Generator
        </Typography>
        <Button color="inherit" onClick={handlLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  </Box>);
};

export default Header;