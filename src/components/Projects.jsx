import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import data from "../data/data";

const Projects = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useTheme();
  const projects = data[lang].projects;

  return (
    <section className={`${theme === "dark" ? "bg-[#484148] text-white" : "bg-white text-gray-900"} py-16`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-light mb-16 text-center ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
          {lang === "tr" ? "Projelerim" : "Projects"}
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`w-[400px] h-[700px] rounded-xl shadow-lg p-6 relative text-left flex flex-col justify-between
              ${theme === "dark" ? `${project.bgColor1} text-white` : `${project.bgColor} text-gray-900`}`}
            >
              {/* ÜST BÖLÜM */}
              <div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-4">{project.description}</p>

                {/* ETİKETLER */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags &&
                    project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-semibold px-3 py-1 rounded-full shadow
                        ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* LİNKLER */}
                <div className="flex justify-between text-sm font-medium mb-4">
                  <a
                    href={project.github}
                    className={`${theme === "dark" ? "text-white" : "text-black"} hover:underline`}
                    target="_blank"
                    rel="noopener noreferrer"
                  > {lang === "tr" ? "Github'da Görüntüle" : "View on Github"}
                  </a>
                  <a
                    href={project.app}
                    className={`${theme === "dark" ? "text-white" : "text-black"} hover:underline`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {lang === "tr" ? "Uygulamaya git ->" : "Go to App ->"}
                  </a>
                </div>
              </div>

              {/* LAPTOP VE İÇ GÖRSEL */}
              <div className="relative w-full max-w-[460px] mx-auto -mb-10 mt-4 z-10">
                <img src={project.laptopImage} alt="Laptop" className="w-full relative z-10 scale-[1.2]" />
                <img
                  src={project.screenImage}
                  alt={project.title}
                  className="absolute top-[-4%] left-[7%] w-[88%] h-[95%] object-cover rounded-sm z-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
