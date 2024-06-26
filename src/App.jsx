import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileCv,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import About from "./components/About";
import ButtomsChanges from "./components/ButtomsChanges";
import Contatc from "./components/Contatc";
import PerfilImage from "./components/PerfilImage";
import Proyects from "./components/Proyects";
import Settings from "./components/Settings";
import Navbar from "./layouts/Navbar";
import LoaderPrincipal from "./layouts/LoaderPrincipal";

function App() {
  const [loader, setLoader] = useState(true);
  const [isShowInfo, setIsShowInfo] = useState("Home");
  const [scrolling, setScrolling] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [setting, setSetting] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [english, setEnglish] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const valueButtom = e.target.value;
    setIsShowInfo(valueButtom);
    setIsShowModal(false);
  };
  const handleClick = () => {
    setIsShowModal(true);
  };

  const handleScroll = (e) => {
    setScrolling(e.target.scrollTop);
  };

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    setSetting(false);
  };

  const handleShowSetting = () => {
    setSetting(!setting);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <>
      {loader ? (
        <LoaderPrincipal />
      ) : (
        <main
          onScroll={handleScroll}
          className={`font-['Poppins'] h-screen  bg-gray-300 dark:bg-black dark:text-white  overflow-y-scroll transition-all ${
            loader ? "opacity-0" : "opacity-100"
          }  ${isShowInfo === "Contact" && "grid md:grid-rows-1"} 
          `}
        >
          {isShowInfo !== "Home" && (
            <Navbar
              handleClick={handleClick}
              isShowModal={isShowModal}
              setIsShowModal={setIsShowModal}
              scrolling={scrolling}
              handleChange={handleChange}
              isShowInfo={isShowInfo}
              theme={theme}
              english={english}
              setEnglish={setEnglish}
              handleChangeTheme={handleChangeTheme}
              setting={setting}
              setSetting={setSetting}
              handleShowSetting={handleShowSetting}
            />
          )}
          <section
            className={`${
              isShowInfo === "Home"
                ? "opacity-100 p-2  md:p-0 "
                : "opacity-0 h-0  overflow-hidden"
            } transition-all duration-500 `}
          >
            <header className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex justify-center items-center">
                {theme === "dark" ? (
                  <img
                    className="relative max-h-[145px]  "
                    src="/Perfil/newLogo.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="relative max-h-[145px]  "
                    src="/Perfil/newLogoDark.png"
                    alt=""
                  />
                )}
                <h3 className="text-2xl uppercase text-redP">Anonyms</h3>
              </div>
              <Settings
                setting={setting}
                handleShowSetting={handleShowSetting}
                handleChangeTheme={handleChangeTheme}
                theme={theme}
                setEnglish={setEnglish}
                english={english}
                setSetting={setSetting}
              />
            </header>

            <div className="relative">
              <PerfilImage theme={theme} perfil="yes" />
              <div>
                <section className=" mt-10   flex justify-center items-center   lg:absolute top-1/2 lg:-translate-y-[150%]  right-0 lg:translate-x-1/4  lg:rotate-90">
                  <ButtomsChanges
                    isShowInfo={isShowInfo}
                    handleChange={handleChange}
                    english={english}
                  />
                </section>
              </div>
            </div>

            <section className="px-10  md:py-0  flex flex-col lg:flex-row md:justify-between">
              <div className="text-center mt-10 lg:mt-0 lg:text-start ">
                <h3 className="text-3xl font-semibold">Web Desinger</h3>
                <h4 className="text-[#C0C0C0] text-2xl">
                  From <span className="text-redP">In</span>
                </h4>
              </div>

              <div className="realtive z-10 flex items-center justify-center mt-5 md:mr-10  gap-5">
                <a
                  className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
                  download="CV-Matias_Zahn"
                  href="CV-MATIAS_ZAHN.pdf"
                >
                  <IconFileCv size={40} />
                </a>

                <a
                  className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
                  href="https://github.com/Matias-Zahn"
                  target="blank"
                >
                  <IconBrandGithub size={40} />
                </a>
                <a
                  className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
                  href="https://www.linkedin.com/in/matias-zahn/"
                  target="blank"
                >
                  <IconBrandLinkedin size={40} />
                </a>
              </div>
            </section>
          </section>
          <About isShowInfo={isShowInfo} english={english} />
          <Proyects isShowInfo={isShowInfo} english={english} />
          <Contatc isShowInfo={isShowInfo} english={english} />
        </main>
      )}
    </>
  );
}

export default App;
