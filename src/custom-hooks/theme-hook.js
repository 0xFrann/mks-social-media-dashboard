import { useState, useEffect } from "react";

export default () => {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    window.document.body.classList.toggle("dark-theme");
  }, [theme]);

  // Detect device theme conf
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      window.document.body.classList += "dark-theme";
      toggleTheme();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [theme, toggleTheme];
};
