import React, { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../js/useDarkMode";

function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(colorTheme === "light" ? true : false);

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch style={{ marginRight: "1rem" }} checked={darkMode} onChange={toggleDarkMode} size={25} />
    </>
  );
}

export default Switcher;
