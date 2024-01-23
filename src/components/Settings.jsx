import { IconSettings } from "@tabler/icons-react";
import SettingsModal from "../layouts/SettingsModal";

function Settings({
  setting,
  handleChangeTheme,
  theme,
  handleShowSetting,
  setEnglish,
  english,
  setSetting,
}) {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 relative z-50">
      <IconSettings
        size={40}
        className={`dark:hover:text-yellow-400 hover:text-yellow-400  transition-colors cursor-pointer ${
          setting ? "text-yellow-400" : "text-black dark:text-white"
        }`}
        onClick={handleShowSetting}
      />
      <h1 className="text-redP px-10 text-5xl flex flex-col text-center uppercase font-bold">
        Matias <span>Zahn</span>
      </h1>

      <SettingsModal
        english={english}
        handleChangeTheme={handleChangeTheme}
        setEnglish={setEnglish}
        setting={setting}
        theme={theme}
        setSetting={setSetting}
      />
    </div>
  );
}
export default Settings;
