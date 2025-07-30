import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import {  useTheme } from "./context/ThemeContext";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
   
  );
}

export default App;
