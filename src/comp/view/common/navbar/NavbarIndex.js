import React, {useState} from 'react';
import {Tab, Tabs} from "@material-ui/core";

const NavbarIndex = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return(
    <div>
      <Tabs
        variant="scrollable"
        value={value}
        onChange={handleChange}
        scrollButtons="on"
        aria-label="Main Menu"
      >
        <Tab label="Menu 1" />
        <Tab label="Menu 2" />
        <Tab label="Menu 3" />
      </Tabs>
    </div>
  );
}
export default NavbarIndex;