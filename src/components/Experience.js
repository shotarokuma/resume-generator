import React, { useState, useContext, useEffect } from "react";
import MyExperience from "./MyExperience";
import AppContext from "../context";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import axios from 'axios';


const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const getEx = () => {
    axios.get(`/api/v1/experiences/${state.user._id}`)
      .then((res) => {
        setExperiences(res.data.experience);
      })
      .catch((e) => alert(e))
  }

  useEffect(() => {
    getEx();
  }, []);

  const { state } = useContext(AppContext);
  const handlExperience = (e) => {
    e.preventDefault();
    const form = e.target;
    const job = form.querySelector("[name='job']").value;
    const company = form.querySelector("[name='company']").value;
    const start = form.querySelector("[name='start']").value;
    const end = form.querySelector("[name='end']").value;
    const note = form.querySelector("[name='note']").value;
    axios.post(`/api/v1/experiences/${state.user._id}`, {
      job: job,
      company: company,
      start: start,
      end: end,
      note: note,
    })
      .then(() => {
        getEx();
      })
      .catch(e => alert(e));
  };

  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={handlExperience}>
          <TextField name="job" label="Job" variant="standard" margin="normal" required fullWidth />
          <TextField name="company" label="Company" variant="standard" margin="normal" required fullWidth />
          <TextField
            name="start"
            label="When did you start this job?"
            type="date"
            defaultValue="2022-01-01"
            variant="standard"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            name="end"
            label="When did you end this job?"
            type="date"
            defaultValue="2022-01-01"
            variant="standard"
            margin="normal"
            required
            fullWidth
          />
          <TextField name="note" label="Can you explain about the job?" variant="outlined" multiline rows={5} margin="normal" fullWidth />
          <Button variant="contained" type="submit" color="primary" fullWidth>Submit</Button>
        </form>
      </Container>
      <MyExperience experiences={experiences}  style={{
          marginTop:"70px"
        }}/>
    </>
  );
};

export default Experience;