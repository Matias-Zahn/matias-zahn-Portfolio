import { proyectsListFront } from "../constants/proyectsList";
import ProyectsCard from "./ProyectsCard";

function FormatProyect({ modalProyect }) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,_350px)] justify-center gap-5 pb-10  max-w-[1100px] mx-auto my-auto ${
        modalProyect
          ? "opacity-0 h-0 overflow-hidden invisible"
          : " visible opacity-100 h-auto"
      }  transition-all duration-300 `}
    >
      {proyectsListFront.map((proyect, index) => (
        <ProyectsCard proyect={proyect} key={index} />
      ))}
    </div>
  );
}
export default FormatProyect;
