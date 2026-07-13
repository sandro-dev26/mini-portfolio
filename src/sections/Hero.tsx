import { useState, useEffect } from "react";

type HeroProps = {
  darkMode: boolean;
};

function Hero({ darkMode }: HeroProps) {
  return (
    <>
      <h1 className={`m-4 text-3xl font-semibold`}>My Mini Portfolio</h1>
    </>
  );
}

export default Hero;
