import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandInstagram, IconBrandX } from "@tabler/icons-react";
import { IconBrandFacebookFilled } from "@tabler/icons-react";

function App() {
  return (
    <main className="relative font-['Poppins'] h-screen bg-black text-white overflow-y-scroll">
      <header className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <img className="relative left-[-15%]" src="/logo.png" alt="" />
          <h3 className="text-2xl uppercase text-[#FF2B51]">Anonyms</h3>
        </div>
        <h1 className="text-[#FF2B51] px-10 text-5xl flex flex-col text-center uppercase font-bold">
          Matias <span>Zahn</span>
        </h1>
      </header>

      <section>
        <div className="relative grid place-items-center">
          <img className="" src="/barrerRed.png" alt="hola" />
          <div className="absolute ">
            <img src="/barrerRed2.png" alt="hola" />
          </div>
          <div className="absolute bottom-[-10%] -translate-x-5">
            <img src="/perfil.png" alt="" />
          </div>
        </div>
      </section>

      <nav className="text-2xl mt-24 flex justify-center  uppercase lg:absolute top-[40%]  right-0 lg:rotate-90">
        <div className="flex flex-col lg:flex-row gap-10">
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            About
          </a>
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            Proyect
          </a>
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="px-10 py-10 md:py-0  flex flex-col lg:flex-row lg:justify-between">
        <div className="text-center mt-10 lg:mt-0 lg:text-start ">
          <h3 className="text-3xl font-semibold">Web Desinger</h3>
          <h4 className="text-[#C0C0C0] text-2xl">
            From <span className="text-[#FF2B51]">In</span>
          </h4>
        </div>

        <div className="flex items-center justify-center mt-5  gap-5">
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            <IconBrandFacebookFilled size={40} />
          </a>
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            <IconBrandInstagram size={40} />
          </a>
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            <IconBrandX size={40} />
          </a>
          <a
            className="hover:text-[#FF2B51] transition-colors duration-300"
            href=""
          >
            <IconBrandLinkedin size={40} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
