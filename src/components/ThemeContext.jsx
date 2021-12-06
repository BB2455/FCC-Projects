import React from "react";
import { getStorage, setStorage, isStorage } from "../utils/localStorage";

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();

export const useTheme = () => {
  return React.useContext(themeContext);
};

export const useThemeUpdate = () => {
  return React.useContext(themeUpdateContext);
};

const STORAGENAME = "darkMode";

export const ThemeProvider = ({ children }) => {
  let storageValue = false;
  const storage = isStorage(STORAGENAME);
  if (!storage) {
    setStorage(STORAGENAME, false);
  } else {
    storageValue = getStorage(STORAGENAME);
  }

  const [darkMode, setDarkMode] = React.useState(storageValue);

  const toggleDarkMode = () => {
    setStorage(STORAGENAME, !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <themeContext.Provider value={darkMode}>
      <themeUpdateContext.Provider value={toggleDarkMode}>
        {children}
      </themeUpdateContext.Provider>
    </themeContext.Provider>
  );
};
