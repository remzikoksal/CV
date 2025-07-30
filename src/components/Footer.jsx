import React, { useContext } from "react";
import data from "../data/data";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useTheme();
  const footerData = data[lang].footer;
  const title = footerData.title[lang];
  const highlight = footerData.highlight[lang];

  const before = title.split(highlight)[0];
  const after = title.split(highlight)[1];

  return (
    <footer
      className={`w-full py-24 ${
        theme === "dark" ? "bg-[#484148] text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
        
        <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-right max-w-xl leading-snug w-full md:w-1/2">
          {before}
          <span className="relative inline-block">
            <span className="relative z-10">{highlight}</span>
            <span className="absolute left-0 bottom-1 w-full h-2 bg-yellow-500 z-0 rounded"></span>
          </span>
          {after}
        </div>

        
        <div className="flex flex-col items-center md:items-start gap-4 text-lg w-full md:w-1/2 text-left">
         {footerData.links.map((link, index) => (
  <a
    key={index}
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className={`${link.color} hover:underline`}
  >
    {link.name}
  </a>
))}

        </div>
      </div>
    </footer>
  );
};

export default Footer;
