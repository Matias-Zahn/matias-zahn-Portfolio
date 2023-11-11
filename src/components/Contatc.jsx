import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";

function Contatc({ isShowInfo }) {

  const handleSubmit= (e) => {
    e.preventDefault()
  }

  return (
    <main
      className={`${
        isShowInfo === "Contact"
          ? " opacity-100  translate-y-0 visible h-screen"
          : "opacity-0 translate-y-full invisible h-0 overflow-hidden"
      } transition-all duration-500 grid grid-rows-[1fr_auto] `}
    >
      
      <div className="grid md:grid-cols-2 px-3 place-items-center max-w-7xl mx-auto mb-10 gap-10 md:gap-0 ">
        <div className=" grid gap-5">
          <h3 className="text-3xl font-semibold text-center md:text-start   text-redP">Conecta conmigo</h3>
          <h5 className="text-xl font-medium">Satisfecho conmigo? Por favor contactame</h5>
          <div className="flex gap-10 justify-around md:justify-start">
            <a className="hover:-translate-y-2 transition-all duration-300 hover:text-redP" href="">
              <IconBrandInstagram size={40}  />{" "}
            </a>
            <a className="hover:-translate-y-2 transition-all duration-300 hover:text-redP" href="">
              <IconBrandWhatsapp  size={40} />{" "}
            </a>
            <a className="hover:-translate-y-2 transition-all duration-300 hover:text-redP" href="">
              <IconBrandFacebookFilled  size={40} />{" "}
            </a>
            <a className="hover:-translate-y-2 transition-all duration-300 hover:text-redP" href="">
              <IconBrandTwitter  size={40} />{" "}
            </a>
          </div>
        </div>
        <div className="grid gap-4 mb-10">
          <h3 className="text-2xl font-medium">Contactame, hagamos magia juntos</h3>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input className="bg-white/10 p-4 rounded-2xl outline-none "  type="text" placeholder="Nombre" />
            <input className="bg-white/10 p-4 rounded-2xl outline-none  "  type="email" placeholder="Email" />
            <input  className="bg-white/10 rounded-2xl p-4 py-6 outline-none " type="text" placeholder="Mensaje" />

            <button className="bg-redP font-medium md:w-72 py-2 rounded-[1rem] px-8 hover:bg-redP/50 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>

      <footer className=" flex flex-col bg-redP p-4 px-10 md:flex-row items-center gap-4 text-lg justify-between">
        <p>@2023 Matias Sebastian Zahn </p>
        <p>Fullstack developer </p>
        <p>UI Desinger </p>
        <p>About this  </p>
      </footer>
    </main>
  );
}
export default Contatc;
