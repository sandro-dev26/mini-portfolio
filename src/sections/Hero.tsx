type HeroProps = {
  darkMode: boolean;
};

function Hero({ darkMode }: HeroProps) {
  return (
    <header className="m-4 w-[80%]">
      <h1 className={`text-3xl font-semibold mb-2`}>My Mini Portfolio</h1>
      <span
        className={`text-sm font-light hover:text-neutral-300 ${darkMode ? "hover:text-neutral-300" : "hover:text-neutral-600"}`}
      >
        A small portfolio showcasing my journey and progress through web
        development.
      </span>
    </header>
  );
}

export default Hero;
