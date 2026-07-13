import weatherApp from "../assets/weatherApp.png";
import formulaSarcastic from "../assets/formulaSarcastic.png";
import miniF1Dashboard from "../assets/miniF1Dashboard.png";

type TimelineProps = {
  darkMode: boolean;
};

function Projects({ darkMode }: TimelineProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start m-4 mt-12 mb-4 p-2 rounded-xl w-[90%] md:w-[50%] lg:w-[70%] transition-all duration-200 ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"}`}
      >
        <span className="m-2 mb-4 text-2xl font-light">Projects</span>
        <ul className="flex flex-col gap-4 m-2">
          <li className="flex flex-col w-[100%] overflow-hidden">
            <span className="text-lg font-semibold">Formula Sarcastic</span>
            <img
              className="w-full h-full object-contain rounded-xl transition-all duration-200 hover:brightness-80 mt-4 mb-2"
              src={formulaSarcastic}
              alt="Weather App Png"
            />
            <span>Not Hosted</span>
            <span>No GitHub Repo</span>
            <span>
              Description:{" "}
              <span className="text-sm font-light">
                A fun JavaScript project built around Formula 1 memes and images
                to practice interactive web development.
              </span>
            </span>
          </li>
          <li className="flex flex-col w-[100%] overflow-hidden">
            <span className="text-lg font-semibold">Weather App</span>
            <img
              className="w-full h-full object-contain rounded-xl transition-all duration-200 hover:brightness-80 mt-4 mb-2"
              src={weatherApp}
              alt="Weather App Png"
            />
            <span>Not Hosted</span>
            <span>No GitHub Repo</span>
            <span>
              Description:{" "}
              <span className="text-sm font-light">
                A personal project built to improve my TypeScript skills by
                working with APIs.
              </span>
            </span>
          </li>
          <li className="flex flex-col gap-1 w-[100%] overflow-hidden">
            <span className="text-lg font-semibold">Mini F1 Dashboard</span>
            <img
              className="w-full h-full object-contain rounded-xl transition-all duration-200 hover:brightness-80 mt-4 mb-2"
              src={miniF1Dashboard}
              alt="Weather App Png"
            />
            <span>
              URL:{" "}
              <a
                href="https://mini-f1-dashboard.vercel.app/"
                className="font-light translate-all duration-100 hover:font-normal"
              >
                Mini F1 Dashboard
              </a>
            </span>
            <span className="flex flex-row items-center gap-1">
              Repo:
              <a
                href="https://github.com/sandro-dev26/mini-f1-dashboard"
                className="flex flex-row items-center gap-1 font-light"
              >
                <img
                  src={
                    darkMode
                      ? "https://cdn.simpleicons.org/github/ffffff"
                      : "https://cdn.simpleicons.org/github/000000"
                  }
                  className="w-4 h-4"
                />
                <span className="translate-all duration-100 hover:font-normal">
                  Mini F1 Dashboard
                </span>
              </a>
            </span>
            <span>
              Description:{" "}
              <span className="text-sm font-light">
                An unofficial fan-made Formula 1 dashboard built with React,
                TypeScript, and Tailwind CSS to display race and championship
                data.
              </span>
            </span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Projects;
