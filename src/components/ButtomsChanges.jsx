function ButtomsChanges({ isShowInfo, handleChange }) {
  return (
    <div className="relative z-20 flex flex-col   md:flex-row gap-4 lg:gap-10 text-3xl">
      {isShowInfo !== "Home" && (
        <button
          className={`hover:text-yellow-200 uppercase p-4  duration-300 transition-all ${
            isShowInfo === "Home" && "lg:hover:-rotate-90"
          } `}
          onClick={handleChange}
          value={"Home"}
        >
          Home
        </button>
      )}
      <button
        className={`hover:text-yellow-200 uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"About"}
      >
        About
      </button>
      <button
        className={`hover:text-yellow-200  uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"Proyects"}
      >
        Proyects
      </button>
      <button
        className={`hover:text-yellow-200  uppercase p-4   duration-300 transition-all ${
          isShowInfo === "Home" && "lg:hover:-rotate-90"
        } `}
        onClick={handleChange}
        value={"Contact"}
      >
        Contact
      </button>
    </div>
  );
}
export default ButtomsChanges;
