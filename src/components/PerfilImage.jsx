function PerfilImage() {
  return (
    <picture>
      <div className="relative  grid place-items-center">
        <img className="" src="/barrerRed.png" alt="hola" />
        <div className="absolute  animate-pulse ">
          <img src="/barrerRed2.png" alt="hola" />
        </div>
        <div className="absolute bottom-[-10%] -translate-x-5">
          <img src="/perfil.png" alt="" />
        </div>
      </div>
    </picture>
  );
}
export default PerfilImage;
