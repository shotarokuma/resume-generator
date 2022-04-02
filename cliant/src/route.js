import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Generator from "./components/Generator"
import Private from "./private";

const Link = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={
          <Private>
            <Generator />
          </Private>} />
      </Routes>
    </BrowserRouter>
  )
};

export default Link;