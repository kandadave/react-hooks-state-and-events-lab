import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State variable for dark mode (true = dark, false = light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Event handler to toggle dark mode
  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Set className based on isDarkMode
  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;