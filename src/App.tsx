import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import Timeline from "./sections/timeline";
import SunIcon from "./components/icons/sunicon";
import MoonIcon from "./components/icons/moonicon";

function App() {
  const [darkModeTheme, setDarkModeTheme] = useState<boolean>(true);

  function changeTheme() {
    setDarkModeTheme(!darkModeTheme);
  }

  return (
    <div
      className={`${darkModeTheme ? "bg-slate-950 text-neutral-50" : "bg-slate-50 text-neutral-900"} w-full h-screen transition-all duration-200`}
    >
      <button
        className={`${darkModeTheme ? "bg-slate-800 hover:bg-slate-700 active:bg-slate-950" : "bg-slate-100 hover:bg-slate-200 active:bg-slate-50"} m-4 rounded-full p-2 transition-all duration-300 active:scale-[0.9]`}
        onClick={changeTheme}
      >
        {darkModeTheme ? <MoonIcon /> : <SunIcon />}
      </button>
      <Hero darkMode={darkModeTheme} />
      <main>
        <Timeline darkMode={darkModeTheme} />
      </main>
    </div>
  );
}

export default App;
