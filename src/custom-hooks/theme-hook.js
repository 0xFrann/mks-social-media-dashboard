import { useState, useEffect, useRef } from "react";

export default () => {
  const isMountRef = useRef(true);
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!theme);

  useEffect(() => {
    if (isMountRef.current) {
      isMountRef.current = false;
    } else {
      window.document.body.classList.toggle("dark-theme");
    }
  }, [theme]);

  // Detect device theme conf
  useEffect(() => {
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      toggleTheme();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [theme, toggleTheme];
};
