import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandTwitter, IconBrandWhatsapp } from "@tabler/icons-react";
import ButtomsChanges from "./ButtomsChanges";

function Contatc({ isShowInfo, handleChange }) {

  const handleSubmit= (e) => {
    e.preventDefault()
  }

  return (
    <main
      className={`${
        isShowInfo === "Contact"
          ? " opacity-100  translate-y-0 h-screen "
          : "opacity-0 hidden  translate-y-full"
      } transition-all duration-500  text-white grid grid-rows-[auto_1fr_auto] `}
    >

      <nav className="flex justify-center py-2">
        <ButtomsChanges
          handleChange={handleChange}
          value1={"Home"}
          value2={"About"}
          value3={"Proyects"}
        />
      </nav>
      <div className="grid md:grid-cols-2 px3  place-items-center max-w-7xl mx-auto mb-10  gap-10  ">
        <div className=" grid gap-5">
          <h3 className="text-3xl font-semibold text-redP">Connect whith me</h3>
          <h5 className="text-xl font-medium">Satisfied whith me? Please Contact me</h5>
          <div className="flex gap-5 justify-center">
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
        <div className="grid gap-4">
          <h3 className="text-2xl font-medium">Contact me, lets make magic together</h3>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input className="bg-white/10 p-4 rounded-2xl outline-none "  type="text" placeholder="Name" />
            <input className="bg-white/10 p-4 rounded-2xl outline-none  "  type="email" placeholder="Email" />
            <input  className="bg-white/10 rounded-2xl p-4 py-6 outline-none " type="text" placeholder="Message" />

            <button className="bg-redP font-medium w-[min(100%,_300px%)] py-2 rounded-[1rem] px-8 hover:bg-redP/50 transition-colors">
              Send
            </button>
          </form>
        </div>
      </div>

      <footer className="flex flex-col bg-redP p-10 md:flex-row items-center  justify-between">
        <p>@2023 Matias Sebastian Zahn </p>
        <p>Fullstack developer </p>
        <p>UI Desinger </p>
        <p>About this  </p>
      </footer>
    </main>
  );
}
export default Contatc;
