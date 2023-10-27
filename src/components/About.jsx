import ButtomsChanges from "./ButtomsChanges";
import PathCard from "./PathCard";
import PerfilImage from "./PerfilImage";

function About({ isShowInfo, handleChange }) {
  return (
    <main
      className={`${
        isShowInfo === "About"
          ? " opacity-100  translate-x-0  "
          : "opacity-0  translate-x-full hidden "
      } transition-all duration-500 p-4 text-white mt-4 `}
    >
      <nav className="flex justify-center md:justify-end">
        <ButtomsChanges
          handleChange={handleChange}
          value1={"Home"}
          value2={"Proyects"}
          value3={"Contact"}
        />
      </nav>
      <section className="grid gap-6 md:grid-cols-2 items-center  ">
        <PerfilImage />

        <div className="grid gap-4 mt-">
          <h2 className="text-2xl text-[#FF2B51]">About Me</h2>
          <h1 className="text-5xl">Matias Sebastian Zahn</h1>
          <ul className="letter leading-relaxed">
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam incidunt dolores mollitia earum dolore voluptas
              delectus facere facilis? Facere adipisci sit iusto corporis id,
              omnis placeat cumque labore quas velit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam incidunt dolores mollitia earum dolore voluptas
              delectus facere facilis? Facere adipisci sit iusto corporis id,
              omnis placeat cumque labore quas velit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam incidunt dolores mollitia earum dolore voluptas
              delectus facere facilis? Facere adipisci sit iusto corporis id,
              omnis placeat cumque labore quas velit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Laboriosam incidunt dolores mollitia earum dolore voluptas
              delectus facere facilis? Facere adipisci sit iusto corporis id,
              omnis placeat cumque labore quas velit.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-5xl font-extrabold text-center mb-10">
          Path to here{" "}
        </h2>
        <div className="grid md:grid-cols-2  justify-center gap-10  max-w-[1500px] mx-auto my-auto">
          <div className="grid gap-4">
            <h4 className="text-3xl ">Area Profesional</h4>
            <h5 className="text-white/50">2016-Actualmente</h5>
            <div className="grid gap-5">
              <PathCard />
              <PathCard />
              <PathCard />
            </div>
          </div>
          <div className="grid gap-4">
            <h4 className="text-3xl">Area Academica</h4>
            <h5 className="text-white/50">2022-Actualmente</h5>
            <div className="grid gap-5">
              <PathCard />
              <PathCard />
              <PathCard />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default About;
