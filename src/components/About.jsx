import { infoList, infoListPro } from "../constants/infoAboutList";
import PathCard from "./PathCard";
import PerfilImage from "./PerfilImage";
import { aboutMe } from "../constants/aboutMe";

function About({ isShowInfo, english }) {
  return (
    <main
      className={`${
        isShowInfo === "About"
          ? " opacity-100   translate-y-0  visible"
          : "opacity-0  translate-y-full invisible h-0  overflow-hidden"
      } transition-all duration-500 text-black  dark:text-white `}
    >
      <section className="grid gap-10 md:grid-cols-2 mt-10 mx-auto max-w-7xl  p-4 items-center ">
        <PerfilImage />

        <div className="grid gap-4">
          <h2 className="text-2xl text-redP">
            {english ? aboutMe[0].eN.about.title : aboutMe[0].eS.about.title}
          </h2>
          <h1 className="text-4xl">Matias Sebastian Zahn</h1>
          <div className="leading-relaxed grid gap-2">
            {english
              ? aboutMe[0].eN.about.description
              : aboutMe[0].eS.about.description}
          </div>
        </div>
      </section>

      <section className="mt-20 p-4">
        <h2 className="text-5xl animate-bounce  font-extrabold text-center mb-10">
          {english ? aboutMe[0].eN.path.title : aboutMe[0].eS.path.title}
        </h2>
        <div className="grid md:grid-cols-2 items-start  gap-10  max-w-[1500px] mx-auto ">
          <div className="grid gap-4">
            <h4 className="text-3xl text-center ">
              {english
                ? aboutMe[0].eN.path.area[0]
                : aboutMe[0].eS.path.area[0]}
            </h4>
            <h5 className="text-white/50 text-center">
              {" "}
              {english
                ? aboutMe[0].eN.path.experencie[0]
                : aboutMe[0].eS.path.experencie[0]}
            </h5>
            <div className="grid gap-5">
              {infoListPro.map((professional, index) => (
                <PathCard key={index} academy={professional} />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <h4 className="text-3xl text-center">
              {" "}
              {english
                ? aboutMe[0].eN.path.area[1]
                : aboutMe[0].eS.path.area[1]}
            </h4>
            <h5 className="text-white/50 text-center">
              {" "}
              {english
                ? aboutMe[0].eN.path.experencie[1]
                : aboutMe[0].eS.path.experencie[1]}
            </h5>
            <div className="grid gap-5">
              {infoList.map((academy, index) => (
                <PathCard key={index} academy={academy} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
