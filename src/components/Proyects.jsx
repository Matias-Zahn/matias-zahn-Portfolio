import { proyectsList } from "../constants/proyectsList";
import ProyectsCard from "./ProyectsCard";

function Proyects({ isShowInfo }) {

  
  return (
    <main
      className={`${
        isShowInfo === "Proyects"
          ? " opacity-100  translate-y-0 p-5 visible  h-screen"
          : "opacity-0  translate-y-full  h-0  overflow-hidden"
      } transition-all duration-500  text-white `}
    >
      <div className="grid justify-center text-center gap-6 mb-10">
        <h3 className="text-4xl">Tecnologías </h3>
        <h5 className="text-white/50 text-2xl">
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
        <h5 className="text-white/50 text-2xl">
          Trabajos y proyectos a lo largo de mi trayectoria
        </h5>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_350px)] justify-center gap-5 pb-10  max-w-[1100px] mx-auto my-auto ">

        {
          proyectsList.map((proyect, index)  => <ProyectsCard proyect={proyect} key={index}  /> )

          
        }

      </div>
    </main>
  );
}
export default Proyects;
