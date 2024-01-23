function PerfilImg({ theme, h }) {
  return (
    <>
      {theme === "dark" ? (
        <img style={{ maxHeight: h }} src="/Perfil/newLogo.png" alt="" />
      ) : (
        <img style={{ maxHeight: h }} src="/Perfil/newLogoDark.png" alt="" />
      )}
    </>
  );
}
export default PerfilImg;
