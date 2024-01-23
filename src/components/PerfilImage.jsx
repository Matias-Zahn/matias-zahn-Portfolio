import PerfilImg from "../layouts/PerfilImg";

function PerfilImage({ perfil = "none", theme }) {
  return (
    <picture>
      <div className="relative grid place-items-center">
        <img className="object-cover" src="/Perfil/barrerRed.png" alt="hola" />
        <div className="absolute animate-pulse ">
          <img src="/Perfil/barrerRed2.png" alt="hola" />
        </div>
        <div
          className={`absolute ${
            perfil === "none" && " bottom-[-10%] -translate-x-5"
          }`}
        >
          {perfil !== "none" ? (
            <PerfilImg theme={theme} h={800 + "px"} />
          ) : (
            <img src="/Perfil/perfil.png" alt="" />
          )}
        </div>
      </div>
    </picture>
  );
}
export default PerfilImage;
