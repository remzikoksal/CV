import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import data from "../data/data";

const Profile = () => {
  const { lang } = useContext(LanguageContext);
  const { theme } = useTheme();
  const profileData = data[lang];

  if (!profileData || !profileData.basicInfo) {
    return (
      <div className="text-red-600 text-center">
        Veri yüklenemedi (data.js yapısını kontrol et)
      </div>
    );
  }

  return (
    <section
      className={`px-6 py-20 ${
        theme === "dark" ? "bg-[#2A262B] text-white" : "bg-[#f5f5f5] text-gray-900"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-light mb-16 text-center">
        {profileData.basicInfo.title}
      </h2>

      <div className="flex flex-col md:flex-row gap-10 justify-center">
        
        <div
          className={`p-10 rounded-xl shadow-lg w-full md:w-1/4 ${
            theme === "dark" ? "bg-[#525252] text-gray-200" : "bg-white text-gray-800"
          }`}
        >
          <ul className="space-y-2">
            <h2 className="text-xl font-mono mb-8 text-red-500">
              {profileData.basicInfo.title2}
            </h2>
            <li>
              <strong>{profileData.basicInfo.labels.birthdate}:</strong>{" "}
              {profileData.basicInfo.birthday}
            </li>
            <li>
              <strong>{profileData.basicInfo.labels.city}:</strong>{" "}
              {profileData.basicInfo.city}
            </li>
            <li>
              <strong>{profileData.basicInfo.labels.education}:</strong>{" "}
              {profileData.basicInfo.education}
            </li>
            <li>
              <strong>{profileData.basicInfo.labels.role}:</strong>{" "}
              {profileData.basicInfo.role}
            </li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/4 p-10">
          <h3 className="text-xl font-semibold mb-4">
            {profileData.about.title}
          </h3>
          <p className="mb-4">{profileData.about.description1}</p>
          <p>{profileData.about.description2}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
