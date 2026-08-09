import projectsData from "../data/projects.json";

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
          {projectsData &&
            projectsData.map((project) => (
              <li className="flex flex-col gap-1 w-full overflow-hidden">
                <span className="text-lg font-semibold">{project.name}</span>
                <iframe
                  className="w-full h-96 object-contain rounded-xl mt-4 mb-2"
                  src={project.url}
                />
                <span>
                  URL:{" "}
                  <a
                    href={project.url}
                    className="font-light translate-all duration-100 hover:font-normal"
                  >
                    {project.name}
                  </a>
                </span>
                <span className="flex flex-row items-center gap-1">
                  Repo:
                  <a
                    href={project.github}
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
                      {project.name}
                    </span>
                  </a>
                </span>
                <span>
                  Description:{" "}
                  <span className="text-sm font-light">
                    {project.description}
                  </span>
                </span>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Projects;
