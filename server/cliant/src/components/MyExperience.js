import React from "react";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import TableContainer from "@mui/material/TableContainer";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const MyExperience = props => {
  return (
    <Container component="main" maxWidth="md">
      <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={3} style={{ marginTop: "100px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="simple table">
            <TableBody>
              {props.experiences.map((experience, key) => {
                return (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{experience.start.substr(0, 10).replaceAll('-', '/')} ~ {experience.end.substr(0, 10).replaceAll('-', '/')}</TableCell>
                    <TableCell align="left">{experience.job}</TableCell>
                    <TableCell align="left">{experience.company}</TableCell>
                    <TableCell >{experience.note ? experience.note : ""}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};


export default MyExperience;