import skillsData from "../data/skills.json";

type SkillsProps = {
  darkMode: boolean;
};

function Skills({ darkMode }: SkillsProps) {
  return (
    <>
      <div
        className={`flex flex-col items-start m-4 mt-12 mb-4 p-2 rounded-xl w-[90%] md:w-[50%] lg:w-[70%] transition-all duration-200 ${darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-slate-200 hover:bg-slate-300"}`}
      >
        <span className="m-2 mb-4 text-2xl font-light">Skills</span>
        <ul className="grid grid-cols-4 gap-4 m-2 md:grid-cols-6 md:gap-6 lg:grid-cols-8 lg:gap-8">
          {skillsData &&
            skillsData.map((skill) => (
              <li>
                <img
                  className="w-12 h-12 rounded-sm md:w-16 md:h-16 md:rounded-md lg:w-20 lg:h-20 lg:rounded-lg transition-all duration-200 hover:scale-[1.1] hover:brightness-90"
                  src={skill.imgUrl}
                  alt={skill.name.toLowerCase()}
                />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default Skills;
