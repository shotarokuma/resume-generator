import React, { useState } from "react";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import WorkIcon from '@mui/icons-material/Work';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Header from "./Header";
import Experience from "./Experience";
import Education from "./Education";


const Generator = () => {
  const [type, setType] = useState(0);
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
          type === 0?
          <Experience/>
          :<Education/>
        }
      </div>
      <Fab color="primary" aria-label="add" style={{
        position: "absolute",
        right: 20,
        bottom: 20,
      }}>
        <AddIcon />
      </Fab>
    </>
  );
};

export default Generator;