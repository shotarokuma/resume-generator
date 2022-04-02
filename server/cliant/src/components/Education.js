import React, { useState, useContext, useEffect } from "react";
import MyEducation from "./MyEducation";
import AppContext from "../context";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import axios from 'axios';


const Education = () => {
  const [educations, setEducations] = useState([]);

  const getEdu = () => {
    axios.get(`/api/v1/educations/${state.user._id}`)
    .then((res) => {
      setEducations(res.data.education);
    })
    .catch((e) => alert(e));
  };


  useEffect(() => {
    getEdu();
  }, []);


  const { state } = useContext(AppContext);
  const handlEducations = (e) => {
    e.preventDefault();
    const form = e.target;
    const school= form.querySelector("[name='school']").value;
    const start = form.querySelector("[name='start']").value;
    const end = form.querySelector("[name='end']").value;
    const note = form.querySelector("[name='note']").value;
    axios.post(`/api/v1/educations/${state.user._id}`, {
      school: school,
      start: start,
      end: end,
      note: note,
    })
      .then(() => {
        getEdu();
      })
      .catch(e => alert(e));
  };


  return(
    <>
    <Container maxWidth="sm">
      <form onSubmit={handlEducations}>
        <TextField name="school" label="school" variant="standard" margin="normal" required fullWidth />
        <TextField
          name="start"
          label="When did you start your school?"
          type="date"
          defaultValue="2022-01-01"
          variant="standard"
          margin="normal"
          required
          fullWidth
        />
        <TextField
          name="end"
          label="When did you graduate?"
          type="date"
          defaultValue="2022-01-01"
          variant="standard"
          margin="normal"
          required
          fullWidth
        />
        <TextField name="note" label="Can you explain about your school?" variant="outlined" multiline rows={5} margin="normal" fullWidth />
        <Button variant="contained" type="submit" color="primary" fullWidth>Submit</Button>
      </form>
    </Container>
    <MyEducation educations={educations}  style={{
        marginTop:"70px"
      }}/>
  </>
  );
};

export default Education;