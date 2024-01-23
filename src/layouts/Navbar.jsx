import { IconApps, IconSettings } from "@tabler/icons-react";
import ButtomsChanges from "../components/ButtomsChanges";
import MenuNavBar from "./MenuNavBar";
import PerfilImg from "./PerfilImg";
import SettingsModal from "./SettingsModal";
function Navbar({
  handleChange,
  scrolling,
  isShowModal,
  setIsShowModal,
  isShowInfo,
  theme,
  english,
  handleChangeTheme,
  setEnglish,
  setting,
  handleShowSetting,
  setSetting,
}) {
  const handleModal = () => {
    setIsShowModal(true);
  };
  const NAVBAR_TRANSITION = `flex justify-center mb-10 ${
    scrolling > 0
      ? "bg-redP fixed  right-0 left-0 z-20   p-2  transition-all duration-500 "
      : "p-0  bg-transparent transition-all duration-500"
  } `;

  return (
    <div className="h-20 ">
      <nav className={` ${NAVBAR_TRANSITION} `}>
        <div className="hidden md:flex items-center ">
          <PerfilImg theme={theme} h={100 + "px"} />
          <ButtomsChanges
            english={english}
            isShowInfo={isShowInfo}
            handleChange={handleChange}
          />
          <div className="relative z-50">
            <button
              className="hover:text-yellow-400 transition-colors"
              onClick={handleShowSetting}
            >
              {" "}
              <IconSettings />
            </button>
            <SettingsModal
              theme={theme}
              english={english}
              handleChangeTheme={handleChangeTheme}
              setEnglish={setEnglish}
              setting={setting}
              setSetting={setSetting}
              forNav={true}
            />
          </div>
        </div>
        <div className="flex justify-between w-full px-5 py-4 md:hidden">
          <div className=" relative items-center  flex gap-4">
            <h4 className="text-3xl">Matias Zahn</h4>
            <div className="">
              <button
                className="hover:text-yellow-400 transition-colors"
                onClick={handleShowSetting}
              >
                {" "}
                <IconSettings />
              </button>
              <SettingsModal
                theme={theme}
                english={english}
                handleChangeTheme={handleChangeTheme}
                setEnglish={setEnglish}
                setting={setting}
                setSetting={setSetting}
                forNav={true}
              />
            </div>
          </div>
          <button onClick={handleModal}>
            {" "}
            <IconApps size={30} />
          </button>
        </div>
      </nav>
      <MenuNavBar
        isShowModal={isShowModal}
        isShowInfo={isShowInfo}
        handleChange={handleChange}
        english={english}
      />
    </div>
  );
}
export default Navbar;
