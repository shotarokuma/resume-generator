import React from "react";
import Container from "@mui/material/Container";
import Paper from '@mui/material/Paper';
import TableContainer from "@mui/material/TableContainer";
import Table from '@mui/material/Table';
import TableBody from "@mui/material/TableBody";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const MyEducation = props => {
  return (
    <Container component="main" maxWidth="md">
      <Paper sx={{ width: '100%', overflow: 'hidden' }} elevation={3} style={{ marginTop: "100px" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="simple table">
            <TableBody>
              {props.educations.map((education, key) => {
                return (
                  <TableRow
                    key={key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="left">{education.start.substr(0, 10).replaceAll('-', '/')} ~ {education.end.substr(0, 10).replaceAll('-', '/')}</TableCell>
                    <TableCell align="left"> studying at {education.school}</TableCell>
                    <TableCell >{education.note ? education.note : ""}</TableCell>
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


export default MyEducation;