import { infoList, infoListPro } from "../constants/infoAboutList";
import PathCard from "./PathCard";
import PerfilImage from "./PerfilImage";

function About({ isShowInfo }) {
  return (
    <main
      className={`${
        isShowInfo === "About"
          ? " opacity-100   translate-y-0  visible  "
          : "opacity-0  translate-y-full invisible h-0  overflow-hidden "
      } transition-all duration-500  text-white `}
    >
      <section className="grid gap-10 md:grid-cols-2 mx-auto max-w-7xl p-4 items-center">
        <PerfilImage />

        <div className="grid gap-4 mt-">
          <h2 className="text-2xl text-[#FF2B51]">About Me</h2>
          <h1 className="text-5xl">Matias Sebastian Zahn</h1>
          <div className="leading-relaxed grid gap-2">
            <p>
              Apasionado por la programacion y los nuevos caminos que
              constantemente intento abrir para lograr una nueva experiencia
              enriquecedora.
            </p>
            <p>
              Actualmente cuento con expereiencias en tecnologias desarroladas
              para el Front-end.
            </p>
            <p>
              Aun asi, sigo con la misma motivacion de aprender desde el primer
              dia!
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 p-4">
        <h2 className="text-5xl  font-extrabold text-center mb-10">
          Mi camino{" "}
        </h2>
        <div className="grid md:grid-cols-2  justify-center gap-10  max-w-[1500px] mx-auto my-auto">
          <div className="grid gap-4">
            <h4 className="text-3xl ">Area Profesional</h4>
            <h5 className="text-white/50">2016-Actualmente</h5>
            <div className="grid gap-5">
                {
                  infoListPro.map((professional, index) => <PathCard key={index} academy={professional} />)
                }
            </div>
          </div>
          <div className="grid gap-4">
            <h4 className="text-3xl">Area Academica</h4>
            <h5 className="text-white/50">2022-Actualmente</h5>
            <div className="grid gap-5">
              {
                infoList.map((academy, index) => <PathCard key={index} academy={academy} />)
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
