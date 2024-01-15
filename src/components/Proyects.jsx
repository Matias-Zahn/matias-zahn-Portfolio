import { useState } from "react";
import { proyectsListBack, proyectsListFront } from "../constants/proyectsList";
import ProyectsCard from "./ProyectsCard";

function Proyects({ isShowInfo }) {
  const [modalProyect, setModalProyect] = useState(false);

  return (
    <main
      className={`${
        isShowInfo === "Proyects"
          ? " opacity-100  translate-y-0 p-5 visible  h-screen"
          : "opacity-0  translate-y-full  h-0  overflow-hidden"
      } transition-all duration-500  text-black dark:text-white `}
    >
      <div className="grid justify-center text-center gap-6 mb-10">
        <h3 className="text-4xl">Tecnologías </h3>
        <h5 className="text-black/60 dark:text-white/50 text-2xl">
          Tecnologías que uso diariamente
        </h5>

        <div className="flex flex-wrap justify-center gap-8 text-redP/50">
          <img src="/Icons/React.png" alt="" />
          <img src="/Icons/Javascript.png" alt="" />
          <img src="/Icons/Css.png" alt="" />
          <img src="/Icons/HTML5.png" alt="" />
          <img src="/Icons/Github.png" alt="" />
          <img src="/Icons/Git.png" alt="" />
          <img src="/Icons/TailwindCSS.png" alt="" />
        </div>
      </div>
      <div className="grid justify-center text-center gap-4 mb-5">
        <h3 className="text-4xl">Proyectos </h3>
        <h5 className="text-black/60 dark:text-white/50 text-2xl">
          Trabajos y proyectos a lo largo de mi trayectoria
        </h5>
      </div>
      <div className="flex bg-red-800 w-min mx-auto mb-4 border rounded-md overflow-hidden [&>button]:transition-all  ">
        <button
          onClick={() => setModalProyect(false)}
          className={`text-2xl text-white  p-4 hover:bg-red-900 hover:text-white ${
            modalProyect
              ? "bg-red-800  "
              : "bg-black text-white dark:bg-white  dark:text-black"
          }`}
        >
          Frontend
        </button>
        <span className="border w-[1px]"></span>
        <button
          onClick={() => setModalProyect(true)}
          className={`text-2xl text-white  p-4 hover:bg-red-900 hover:text-white ${
            modalProyect
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-red-800"
          }`}
        >
          Backend
        </button>
      </div>
      <div
        className={`grid grid-cols-[repeat(auto-fit,_350px)] justify-center gap-5  max-w-[1100px] mx-auto my-auto ${
          modalProyect
            ? "opacity-0 h-0 overflow-hidden invisible"
            : " visible opacity-100 h-auto pb-10"
        }  transition-all duration-300 `}
      >
        {proyectsListFront.map((proyect, index) => (
          <ProyectsCard proyect={proyect} key={index} />
        ))}
      </div>
      <div
        className={`grid grid-cols-[repeat(auto-fit,_350px)] justify-center gap-5  max-w-[1100px] mx-auto my-auto ${
          modalProyect
            ? "visible opacity-100 h-auto pb-10"
            : " opacity-0 h-0 overflow-hidden invisible"
        }  transition-all duration-300 `}
      >
        {proyectsListBack.map((proyect, index) => (
          <ProyectsCard
            proyect={proyect}
            key={index}
            modalProyect={modalProyect}
          />
        ))}
      </div>
    </main>
  );
}
export default Proyects;
