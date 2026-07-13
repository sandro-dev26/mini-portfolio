type TimelineProps = {
  darkMode: boolean;
};

function Skills({ darkMode }: TimelineProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start m-4 mt-12 mb-4 p-2 rounded-xl w-[90%] md:w-[50%] lg:w-[70%] transition-all duration-200 ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"}`}
      >
        <span className="m-2 mb-4 text-2xl font-light">Skills</span>
        <ul className="grid grid-cols-4 gap-4 m-2 md:grid-cols-6 md:gap-6 lg:grid-cols-8 lg:gap-8">
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="Javascript"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="Typescript"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind Css"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg"
              alt="Vite"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="Html"
            />
          </li>
          <li>
            <img
              className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="Css"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
