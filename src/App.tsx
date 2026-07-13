import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import SunIcon from "./components/icons/sunicon";
import MoonIcon from "./components/icons/moonicon";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  function changeTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`${darkMode ? "bg-slate-950 text-neutral-50" : "bg-slate-50 text-neutral-900"} w-full h-screen transition-all duration-200`}
    >
      <button
        className={`${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-100 hover:bg-slate-200"} m-4 rounded-full p-2 transition-all duration-300`}
        onClick={changeTheme}
      >
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </button>
      <Hero darkMode={darkMode} />
    </div>
  );
}

export default App;
