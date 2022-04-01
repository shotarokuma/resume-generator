import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/login";
import Signup from "./components/signup";
import Private from "./private";

const Link = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
};

export default Link;