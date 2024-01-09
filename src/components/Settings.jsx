import {
  IconLanguage,
  IconMoon,
  IconSettings,
  IconSun,
} from "@tabler/icons-react";

function Settings({ setting, handleChangeTheme, theme, handleShowSetting }) {
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center gap-4 relative">
      <IconSettings
        size={40}
        className={`hover:text-yellow-400 transition-colors cursor-pointer ${
          setting ? "text-yellow-400" : "text-black dark:text-white"
        }`}
        onClick={handleShowSetting}
      />
      <h1 className="text-redP px-10 text-5xl flex flex-col text-center uppercase font-bold">
        Matias <span>Zahn</span>
      </h1>

      <div
        className={`absolute z-10 bottom-[-10%] md:bottom-[-85%] md:left-[-50%] rounded-md grid gap-2 bg-yellow-400 text-black transition-all ${
          setting
            ? " opacity-100  visible "
            : " opacity-0  overflow-x-hidden h-0"
        } `}
      >
        <button
          onClick={handleChangeTheme}
          className="flex  gap-4 hover:bg-black hover:text-white p-4 px-5 transition-colors"
        >
          <h4>{theme === "dark" ? "Dark Mode" : " Light Mode"} </h4>
          {theme === "dark" ? <IconMoon /> : <IconSun />}
        </button>
        <button className="flex justify-between hover:bg-black hover:text-white p-4 px-5 transition-colors">
          <h4>English</h4>
          <IconLanguage />
        </button>
      </div>
    </div>
  );
}
export default Settings;
