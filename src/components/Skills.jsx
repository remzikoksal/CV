import React, { useContext } from "react";
import data from "../data/data";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useTheme();
  const { title, items } = data[lang].skillsSection;

  return (
    <section
      className={`py-16 px-4 ${
        theme === "dark" ? "bg-[#484148] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-light mb-16">{title}</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {items.map((skill, index) => (
            <div key={index} className="flex flex-col items-center w-[100px]">
              <div
                className={`w-[100px] h-[100px] rounded-lg flex items-center justify-center ${
                  skill.bgColor ? skill.bgColor : theme === "dark" ? "bg-[#2A262B]" : "bg-[#f5f5f5]"
                } shadow-md`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-15 h-14 object-contain"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
