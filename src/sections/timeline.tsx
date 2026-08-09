import timelineData from "../data/timeline.json";

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
          {timelineData && (
            <div className="flex flex-col m-2">
              <span className={`text-xl font-normal rounded-md`}>
                {timelineData.mid2025.title}
              </span>
              <span
                className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
              >
                {timelineData.mid2025.timeline}
              </span>
              <ul className="flex flex-col items-start m-2">
                {timelineData.mid2025.stackLearned.map((stack) => (
                  <li
                    className={
                      darkMode
                        ? "hover:text-neutral-300"
                        : "hover:text-neutral-600"
                    }
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {timelineData && (
            <div className="flex flex-col m-2">
              <span className={`text-xl font-normal rounded-md`}>
                {timelineData.early2026.title}
              </span>
              <span
                className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
              >
                {timelineData.early2026.timeline}
              </span>
              <ul className="flex flex-col items-start m-2">
                {timelineData.early2026.stackLearned.map((stack) => (
                  <li
                    className={
                      darkMode
                        ? "hover:text-neutral-300"
                        : "hover:text-neutral-600"
                    }
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {timelineData && (
            <div className="flex flex-col m-2">
              <span className={`text-xl font-normal rounded-md`}>
                {timelineData.present.title}
              </span>
              <span
                className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
              >
                {timelineData.present.timeline}
              </span>
              <ul className="flex flex-col items-start m-2">
                {timelineData.present.stackLearned.map((stack) => (
                  <li
                    className={
                      darkMode
                        ? "hover:text-neutral-300"
                        : "hover:text-neutral-600"
                    }
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {timelineData && (
            <div className="flex flex-col m-2">
              <span className={`text-xl font-normal rounded-md`}>
                {timelineData.future.title}
              </span>
              <span
                className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
              >
                {timelineData.future.timeline}
              </span>
              <ul className="flex flex-col items-start m-2">
                {timelineData.future.stackLearned.map((stack) => (
                  <li
                    className={
                      darkMode
                        ? "hover:text-neutral-300"
                        : "hover:text-neutral-600"
                    }
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {timelineData && (
            <div className="flex flex-col m-2">
              <span className={`text-xl font-normal rounded-md`}>
                {timelineData.farFuture.title}
              </span>
              <span
                className={`text-[0.75rem] font-light rounded-md ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
              >
                {timelineData.farFuture.timeline}
              </span>
              <ul className="flex flex-col items-start m-2">
                {timelineData.farFuture.stackLearned.map((stack) => (
                  <li
                    className={
                      darkMode
                        ? "hover:text-neutral-300"
                        : "hover:text-neutral-600"
                    }
                  >
                    {stack}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Timeline;
