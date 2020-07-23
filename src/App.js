import React from "react";
import themeHook from "./custom-hooks/theme-hook";
import "./assets/sass/main.scss";

function App() {
  const [theme, toggleTheme] = themeHook();

  return (
    <div className="App">
      <header className="App-header">
        <h1>MakingSense UX Dev Challenge</h1>
        <input type="checkbox" checked={theme} onChange={toggleTheme} />
      </header>
    </div>
  );
}

export default App;
