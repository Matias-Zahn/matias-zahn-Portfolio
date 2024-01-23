function MenuNavBar({ handleChange, isShowModal, isShowInfo, english }) {
  return (
    <section
      className={`fixed top-0 right-0 left-0 bottom-0 bg-black/90 z-40 ${
        isShowModal ? "opacity-100 visible" : "opacity-0 invisible"
      }  transition-all duration-500`}
    >
      <div className="h-screen flex flex-col  text-3xl justify-center gap-20">
        <button
          className={` ${
            isShowInfo === "Home" ? "text-yellow-400" : " text-white"
          } hover:tracking-widest hover:text-redP transition-all duration-300`}
          value={"Home"}
          onClick={handleChange}
        >
          {english ? "Home" : "Inicio"}
        </button>
        <button
          className={` ${
            isShowInfo === "About" ? "text-yellow-400" : " text-white"
          } hover:tracking-widest hover:text-redP transition-all duration-300`}
          value={"About"}
          onClick={handleChange}
        >
          {english ? "About Me" : "Sobre mí"}
        </button>
        <button
          className={` ${
            isShowInfo === "Proyects" ? "text-yellow-400" : " text-white"
          } hover:tracking-widest hover:text-redP transition-all duration-300`}
          value={"Proyects"}
          onClick={handleChange}
        >
          {english ? "Proyects" : "Proyectos"}
        </button>
        <button
          className={` ${
            isShowInfo === "Contact" ? "text-yellow-400" : " text-white"
          } hover:tracking-widest hover:text-redP transition-all duration-300`}
          value={"Contact"}
          onClick={handleChange}
        >
          {english ? "Contact" : "Contacto"}
        </button>
      </div>
    </section>
  );
}
export default MenuNavBar;
