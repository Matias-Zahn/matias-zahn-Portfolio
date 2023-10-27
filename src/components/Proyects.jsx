import ButtomsChanges from "./ButtomsChanges";
import ProyectsCard from "./ProyectsCard";

function Proyects({ isShowInfo, handleChange }) {
  return (
    <main
      className={`${
        isShowInfo === "Proyects"
          ? " opacity-100  translate-y-0  h-screen"
          : "opacity-0  translate-y-full h-0 hidden m-0 p-0"
      } transition-all duration-500 p-4 text-white `}
    >
      <div className="flex justify-center flex-wrap md:justify-between items-center mb-10 max-w-7xl mx-auto">
        <h2 className="text-5xl text-center ">Works And Proyects</h2>

        <ButtomsChanges
          handleChange={handleChange}
          value1={"Home"}
          value2={"About"}
          value3={"Contact"}
        />
      </div>

      <div className="grid justify-center text-center gap-4 mb-10">
        <h3 className="text-4xl">Tecnologys </h3>
        <h5 className="text-white/50 text-2xl">Tecnologias que uso diariamente</h5>

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

      <div className="grid grid-cols-[repeat(auto-fit,_360px)] justify-center gap-5  max-w-[1500px] mx-auto my-auto ">
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
        <ProyectsCard />
      </div>
    </main>
  );
}
export default Proyects;
