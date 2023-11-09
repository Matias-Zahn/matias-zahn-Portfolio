import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { useState } from "react";
import PerfilImage from "./components/PerfilImage";
import About from "./components/About";
import Proyects from "./components/Proyects";
import Contatc from "./components/Contatc";
import ButtomsChanges from "./components/ButtomsChanges";
import Navbar from "./layouts/Navbar";

function App() {
  const [isShowInfo, setIsShowInfo] = useState("Home");
  const [scrolling, setScrolling] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    const valueButtom = e.target.value;
    setIsShowInfo(valueButtom);
    setIsShowModal(false);
  };
  const handleClick = () => {
    setIsShowModal(true)
  };

  const handleScroll = (e) => {
    setScrolling(e.target.scrollTop);
  };

  return (
    <main
      onScroll={handleScroll}
      className={`font-['Poppins'] h-screen  bg-black text-white  overflow-y-scroll  ${isShowInfo === 'Contact' && 'grid md:grid-rows-1'}`}
    >
      {isShowInfo !== "Home" && (
        <Navbar
          handleClick={handleClick}
          isShowModal={isShowModal}
          setIsShowModal={setIsShowModal}
          scrolling={scrolling}
          handleChange={handleChange}
          isShowInfo={isShowInfo}
        />
      )}
      <section
        className={`${
          isShowInfo === "Home"
            ? "opacity-100 p-2 md:p-0 "
            : "opacity-0 h-0  overflow-hidden"
        } transition-all duration-500 `}
      >
        <header className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img
              className="relative left-[-15%] max-w-[180px] md:max-w-none"
              src="/logo.png"
              alt=""
            />
            <h3 className="text-2xl uppercase text-redP">Anonyms</h3>
          </div>
          <h1 className="text-redP px-10 text-5xl flex flex-col text-center uppercase font-bold">
            Matias <span>Zahn</span>
          </h1>
        </header>

        <div className="relative">
          <PerfilImage />
          <div>
            <section className=" mt-10   flex justify-center items-center   lg:absolute top-1/2 lg:-translate-y-[150%]  right-0 lg:translate-x-1/4  lg:rotate-90">
              <ButtomsChanges
                isShowInfo={isShowInfo}
                handleChange={handleChange}
                value1={"About"}
                value2={"Proyects"}
                value3={"Contact"}
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

          <div className="realtive z-10 flex items-center justify-center mt-5  gap-5">
            <a
              className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
              href=""
            >
              <IconBrandFacebookFilled size={40} />
            </a>
            <a
              className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
              href=""
            >
              <IconBrandInstagram size={40} />
            </a>
            <a
              className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
              href=""
            >
              <IconBrandX size={40} />
            </a>
            <a
              className="hover:text-redP transition-all duration-300 hover:-translate-y-2"
              href=""
            >
              <IconBrandLinkedin size={40} />
            </a>
          </div>
        </section>
      </section>
      <About
        isShowInfo={isShowInfo}
        handleChange={handleChange}
        scrolling={scrolling}
      />
      <Proyects isShowInfo={isShowInfo} handleChange={handleChange} />
      <Contatc isShowInfo={isShowInfo} handleChange={handleChange} />
    </main>
  );
}

export default App;
