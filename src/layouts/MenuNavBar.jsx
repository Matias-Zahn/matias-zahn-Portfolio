function MenuNavBar({ handleChange, isShowModal}) {
  return (
    <section className={`fixed top-0 right-0 left-0 bottom-0 bg-black/90 z-40 ${isShowModal ? 'opacity-100 visible' : 'opacity-0 invisible'}  transition-all duration-500`}>
        <div className="h-screen flex flex-col  text-3xl justify-center gap-20">
            <button className="hover:tracking-widest hover:text-redP transition-all duration-300" value={"Home"} onClick={handleChange}>Home</button>
            <button className="hover:tracking-widest hover:text-redP transition-all duration-300" value={"About"} onClick={handleChange}>About</button>
            <button className="hover:tracking-widest hover:text-redP transition-all duration-300" value={"Proyects"} onClick={handleChange}>Proyects</button>
            <button className="hover:tracking-widest hover:text-redP transition-all duration-300" value={"Contact"} onClick={handleChange}>Contact</button>
        </div>
    </section>
  )
}
export default MenuNavBar 