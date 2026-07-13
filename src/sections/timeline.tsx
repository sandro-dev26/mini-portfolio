type TimelineProps = {
  darkMode: boolean;
};

function Timeline({ darkMode }: TimelineProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start m-4 mt-12 mb-4 p-2 rounded-xl w-[90%] md:w-[50%] lg:w-[70%] transition-all duration-200 ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"}`}
      >
        <span className="m-2 mb-4 text-2xl font-light">Timeline</span>

        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col m-2">
            <span className={`text-xl font-normal rounded-md`}>Javascript</span>
            <span
              className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
            >
              Mid 2025 - Early 2026
            </span>
            <ul className="flex flex-col items-start m-2">
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Html
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Css
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Javascript
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start m-2">
            <span className={`text-xl font-normal rounded-md`}>Typescript</span>
            <span
              className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
            >
              Early 2026 - Now
            </span>
            <ul className="flex flex-col items-start m-2">
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Typescript
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                React
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Tailwind Css
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start m-2">
            <span className={`text-xl font-normal rounded-md`}>Typescript</span>
            <span
              className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
            >
              Now (Learning)
            </span>
            <ul className="flex flex-col items-start m-2">
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                React Three Fiber (R3F)
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start m-2">
            <span className={`text-xl font-normal rounded-md`}>Backend</span>
            <span
              className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
            >
              Future
            </span>
            <ul className="flex flex-col items-start m-2">
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Next.js
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Node.js
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Express
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                SQL (Postgre SQL)
              </li>
              <li
                className={
                  darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"
                }
              >
                Nest.js
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;
