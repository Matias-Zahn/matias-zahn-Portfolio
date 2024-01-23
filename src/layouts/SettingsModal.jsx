import { IconLanguage, IconMoon, IconSun } from "@tabler/icons-react";

function SettingsModal({
  setting,
  handleChangeTheme,
  setEnglish,
  english,
  theme,
  setSetting,
  forNav = false,
}) {
  const hanldeShowModal = () => {
    setEnglish(!english);
    setSetting(!setting);
  };

  return (
    <div
      className={`absolute z-50  ${
        forNav
          ? " left-40  md:left-4"
          : "bottom-[-10%] md:bottom-[-85%] md:left-[-50%]"
      }  rounded-lg overflow-hidden grid gap-2 bg-yellow-400 text-black transition-all ${
        setting ? " opacity-100  visible " : " opacity-0  overflow-hidden h-0"
      } `}
    >
      <button
        onClick={handleChangeTheme}
        className="flex  gap-4 hover:bg-black hover:text-white p-4 px-5 transition-colors"
      >
        <h4>{theme === "dark" ? "Dark Mode" : " Light Mode"} </h4>
        {theme === "dark" ? <IconMoon /> : <IconSun />}
      </button>
      <button
        onClick={hanldeShowModal}
        className="flex justify-between hover:bg-black hover:text-white p-4 px-5 transition-colors"
      >
        <h4>{english ? "Español" : "English"}</h4>
        <IconLanguage />
      </button>
    </div>
  );
}
export default SettingsModal;
