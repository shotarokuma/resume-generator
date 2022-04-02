import React, { useState, useContext } from "react";
import AppContext from "../context";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WorkIcon from '@mui/icons-material/Work';
import Fab from '@mui/material/Fab';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";
import { createDocx } from "../doc";


const Generator = () => {
  const [type, setType] = useState(0);
  const { state } = useContext(AppContext);

  return (
    <>
      <Header />
      <div>
        <BottomNavigation
          showLabels
          value={type}
          onChange={(event, newType) => {
            setType(newType)
          }}
        >
          <BottomNavigationAction label="Experience" icon={<WorkIcon />} />
          <BottomNavigationAction label="Education" icon={<BorderColorIcon />} />
        </BottomNavigation>
      </div>
      <div>
        {
          type === 0 ?
            <Experience />
            : <Education />
        }
      </div>
      <Fab color="primary" aria-label="add"
        onClick={() => createDocx(state.user)}
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
        }}>
        <ArrowDownwardIcon />
      </Fab>
    </>
  );
};

export default Generator;