import React from "react";
import GlobalStyle from "../global.styled";
import { ThemeProvider } from "styled-components";
import { getStorage, setStorage, isStorage } from "../utils/localStorage";
import { lightTheme, darkTheme } from "../themes";

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();

export const useTheme = () => {
  return React.useContext(themeContext);
};

export const useThemeUpdate = () => {
  return React.useContext(themeUpdateContext);
};

const STORAGENAME = "darkMode";

export const MainThemeProvider = ({ children }) => {
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
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </themeUpdateContext.Provider>
    </themeContext.Provider>
  );
};
