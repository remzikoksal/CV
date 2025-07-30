import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import data from "../data/data";

export default function Hero() {
  const { lang, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme(); 
  const hero = data[lang].heroSection;

  return (
    <section className="bg-[#f5f5f5] dark:bg-[#2A262B] text-gray-900 dark:text-white w-full px-6 md:px-12 lg:px-40 pt-10">
      <div className="w-full flex justify-end items-center text-sm font-medium gap-6 px-12 pt-6">
       
        <div className="flex items-center gap-2 cursor-pointer" onClick={toggleTheme}>
          <div className="w-10 h-5 rounded-full bg-gray-300 dark:bg-yellow-500 flex items-center px-1">
            <div
              className={`w-3 h-3 rounded-full bg-black   dark:bg-white transition-transform duration-300 ${
                theme === "dark" ? "translate-x-5" : "translate-x-0"
              }`}
            ></div>
          </div>
          <span className="text-sm">{lang === "tr" ? "KARANLIK MOD" : "DARK MODE"}</span>
        </div>

        <span className="text-gray-400">|</span>

        <button className="text-white bg-yellow-500 px-3 py-1 rounded" onClick={toggleLanguage}>
          {lang === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
      </div>

      
      <div className="w-full flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-10">
       
        <div className="w-full md:w-1/2">
          <p className="text-xl mb-4">{hero.greeting}</p>
          <h1 className="text-4xl md:text-5xl font-sans leading-snug mb-10">
            {hero.intro.split(" ").map((word, i) =>
              word.includes("Almila") ? (
                <span key={i} className="relative inline-block">
                  <span className="z-10 relative">{word}</span>
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-500z-0 rounded"></span>{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          
          <div className="flex items-center gap-4 mb-4">
            {hero.socials.map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer">
                <img src={social.logo} alt={social.alt_text} className="w-6 h-6" />
              </a>
            ))}
          </div>

        
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: hero.ctaHTML }}
          />
        </div>

      
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="p-2 bg-yellow-500 rounded-[30px]">
            <img
              src={hero.profileImage}
              alt="profile"
              className="w-80 h-80 object-cover rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
