import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import emailJS from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";
import Loader from "../layouts/Loader";
import { Toaster, toast } from "sonner";

function Contatc({ isShowInfo }) {
  const refForm = useRef();

  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_i2xqvcl";
    const templateId = "template_shmv7gw";
    // Aqui van los datos del formulario
    const API_KEY = "-X6C1_LYegS1_aXps";

    setIsLoadingForm(true);
    emailJS
      .sendForm(serviceId, templateId, refForm.current, API_KEY)
      .then(() => {
        e.target.username.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
        toast.success("Gracias, me pondré en contacto contigo enseguida!");
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoadingForm(false));
  };

  return (
    <main
      className={`${
        isShowInfo === "Contact"
          ? " opacity-100  translate-y-0 visible h-screen"
          : "opacity-0 translate-y-full invisible h-0 overflow-hidden"
      } transition-all duration-500 grid grid-rows-[1fr_auto] `}
    >
      <section className="grid md:grid-cols-2 px-3 place-items-center max-w-7xl mx-auto mb-10 gap-10 ">
        <div className=" grid gap-5 ">
          <h3 className="text-3xl font-semibold text-center md:text-start   text-redP">
            ¿Satisfecho conmigo?
          </h3>
          <h5 className="text-xl font-medium">
            Por favor, ponte en contacto conmigo
          </h5>
          <div className="flex gap-5 justify-around md:justify-start">
            <a
              className="hover:-translate-y-2 transition-all duration-300 hover:text-redP"
              href="https://github.com/Matias-Zahn"
              target="blank"
            >
              <IconBrandGithub size={40} />
            </a>
            <a
              className="hover:-translate-y-2 transition-all duration-300 hover:text-redP"
              href="https://www.linkedin.com/in/matias-zahn/"
              target="blank"
            >
              <IconBrandLinkedin size={40} />
            </a>
          </div>
        </div>
        <div className="grid gap-4 mb-10">
          <h3 className="text-2xl font-medium">
            Contáctame, hagamos magia juntos
          </h3>
          <form ref={refForm} onSubmit={handleSubmit} className="grid gap-4">
            <input
              className="bg-white/10 p-4 rounded-2xl outline-none "
              name="username"
              type="text"
              required
              placeholder="Nombre"
            />
            <input
              className="bg-white/10 p-4 rounded-2xl outline-none  "
              name="email"
              type="email"
              required
              placeholder="Email"
            />
            <textarea
              className="bg-white/10 rounded-2xl p-4 py-6 outline-none "
              name="message"
              type="text"
              required
              placeholder="Mensaje"
            />

            <button className="bg-redP font-medium md:w-72 py-2 rounded-[1rem] px-8 hover:bg-redP/50 transition-colors grid place-items-center">
              {isLoadingForm ? <Loader /> : <p>Enviar</p>}
            </button>
          </form>
        </div>
      </section>

      <Toaster />

      <footer className=" flex flex-col bg-redP p-4 px-10 md:flex-row items-center gap-4 text-lg justify-between">
        <p>@2023 Matias Sebastian Zahn </p>
        <p>Fullstack developer </p>
        <p>UI Desinger </p>
        <p>About this </p>
      </footer>
    </main>
  );
}
export default Contatc;
