import React, {useState} from 'react';
import {Paper, Tab, Tabs} from "@material-ui/core";

const NavbarIndex = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return(
    <Paper >
      <Tabs
        value={value}
        onChange={handleChange}
        // scrollButtons="on"
        aria-label="Main Menu"
        centered
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Menu 1" />
        <Tab label="Menu 2" />
        <Tab label="Menu 3" />
      </Tabs>
    </Paper>
  );
}
export default NavbarIndex;