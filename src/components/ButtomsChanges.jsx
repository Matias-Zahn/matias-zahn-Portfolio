function ButtomsChanges({ isShowInfo, handleChange, english }) {
  return (
    <div className="relative z-20 flex flex-col   md:flex-row gap-4 lg:gap-10 text-3xl">
      {isShowInfo !== "Home" && (
        <button
          className={`hover:text-yellow-400 ${
            isShowInfo === "Home"
              ? "text-yellow-400"
              : "text-black dark:text-white "
          }  uppercase p-4  duration-300 transition-all ${
            isShowInfo === "Home" && "lg:hover:-rotate-90"
          } `}
          onClick={handleChange}
          value={"Home"}
        >
          {english ? "Home" : "Inicio"}
        </button>
      )}
      <button
        className={`hover:text-yellow-400 ${
          isShowInfo === "About"
            ? "text-yellow-400"
            : "text-black dark:text-white"
        } uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"About"}
      >
        {english ? "About Me" : "Sobre Mí"}
        <div
          className={
            isShowInfo === "About"
              ? "bg-black dark:bg-white h-1 w-full opacity-100 translate-x-0 duration-500 transition-all"
              : "opacity-0 translate-x-full"
          }
        >
          {" "}
        </div>
      </button>
      <button
        className={`hover:text-yellow-400 ${
          isShowInfo === "Proyects"
            ? "text-yellow-400"
            : "text-black dark:text-white"
        }  uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"Proyects"}
      >
        {english ? "Proyects" : "Proyectos"}
        <div
          className={
            isShowInfo === "Proyects"
              ? "bg-black dark:bg-white h-1 w-full opacity-100 translate-x-0 duration-500 transition-all"
              : "opacity-0 translate-x-full"
          }
        >
          {" "}
        </div>
      </button>
      <button
        className={`hover:text-yellow-400 ${
          isShowInfo === "Contact"
            ? "text-yellow-400"
            : "text-black dark:text-white"
        }  uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"Contact"}
      >
        {english ? "Contact" : "Contacto"}
        <div
          className={
            isShowInfo === "Contact"
              ? "bg-black dark:bg-white h-1 w-full opacity-100 translate-x-0 duration-500 transition-all"
              : "opacity-0 translate-x-full"
          }
        >
          {" "}
        </div>
      </button>
    </div>
  );
}
export default ButtomsChanges;
