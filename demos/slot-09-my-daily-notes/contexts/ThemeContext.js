export const lightTheme = {
  background: "#f0f0f0",
  text: "#333333",
  cardBackground: "#ffffff",
  headerBackground: "#6200EE",
  headerText: "#ffffff",
  accent: "#03DAC6",
  deleteButton: "#CF6679",
};
export const darkTheme = {
  background: "#121212",
  text: "#ffffff",
  cardBackground: "#1E1E1E",
  headerBackground: "#BB86FC",
  headerText: "#000000",
  accent: "#03DAC6",
  deleteButton: "#CF6679",
};
const ThemeContext = createContext({
  theme: lightTheme,
  isDarkMode: false,
  toggleTheme: () => {},
});
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);
  // Rất quan trọng: Memoize giá trị context để tránh re-render không cần thiết
  const contextValue = useMemo(
    () => ({ theme, isDarkMode, toggleTheme }),
    [theme, isDarkMode, toggleTheme],
  );
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
export default ThemeContext;
import { createContext, useCallback, useContext, useMemo, useState } from "react";
