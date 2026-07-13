import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import Timeline from "./sections/timeline";
import Skills from "./sections/skills";
import Projects from "./sections/project";
import Footer from "./sections/footer";
import SunIcon from "./components/sunicon";
import MoonIcon from "./components/moonicon";

function App() {
  const [darkModeTheme, setDarkModeTheme] = useState<boolean>(true);

  useEffect(() => {
    const body = document.querySelector("body");
    const html = document.querySelector("html");

    if (!body) return;
    if (!html) return;

    if (darkModeTheme) {
      body.classList.remove("light");
      html.classList.remove("light");
    } else {
      body.classList.add("light");
      html.classList.add("light");
    }
  }, [darkModeTheme]);

  function changeTheme() {
    setDarkModeTheme(!darkModeTheme);
  }

  return (
    <div
      className={`${darkModeTheme ? "bg-slate-950 text-neutral-50 selection:bg-slate-700 selection:text-neutral-50" : "bg-slate-50 text-neutral-900 selection:bg-slate-200 selection:text-neutral-90"} w-full min-h-screen`}
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
        <Skills darkMode={darkModeTheme} />
        <Projects darkMode={darkModeTheme} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
