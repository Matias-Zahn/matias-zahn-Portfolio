import {
  IconBrandGithub,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandVercel,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind
} from "@tabler/icons-react";
import { useState } from "react";

function ProyectsCard({ proyect }) {
  const [isHover, setIsHover] = useState(false);

  const optionsTecnologys={
    'React': <IconBrandJavascript />,
    'Javascript': <IconBrandReact />,
    'HTML': <IconBrandHtml5 />,
    'CSS': <IconBrandCss3 />,
    'TailwindCSS': <IconBrandTailwind />
  }

  return (
    <section
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className="border-2 shadow-lg shadow-redP/40  cursor-pointer relative grid gap-4  broder-2 rounded-2xl border-redP/50 overflow-hidden"
    >
      <div className="grid gap-2 p-4">
        <h4 className="text-xl font-bold">{proyect.title}</h4>
      </div>
      <div className="flex justify-center gap-4 flex-wrap items-center">
        {proyect.tecnologys.map((tecnology, index) => (
          <h4
            key={index}
            className="bg-redP/10 text-redP  py-2 px-4 rounded-2xl flex gap-2"
          >
            {tecnology} {optionsTecnologys[tecnology]}
            
          </h4>
        ))}
      </div>
      <picture className="max-h-[200px]">
        <img src={proyect.img} alt="" />
      </picture>

      {/* HOVER */}

      <div
        className={` bg-red-900 rounded-xl grid grid-rows-[1fr_auto]  absolute top-0 h-full right-0 w-full transition-all duration-500 ${
          isHover
            ? "visible translate-y-0 opacity-100 p-5"
            : "invisible opacity-0 translate-y-full"
        } `}
      >
        <div className=" font-semibold">
          <p>{proyect.description}</p>
        </div>
        <div className="flex justify-end gap-2  ">
          <a
            className="p-2 bg-black border-white border rounded-full hover:bg-white hover:text-black transition-all"
            href={proyect.urlGit}
            target="blank"
          >
            {" "}
            <IconBrandGithub />
          </a>
          <a
            className="p-2 bg-black border-white border rounded-full hover:bg-white hover:text-black transition-all"
            href={proyect.url}
            target="blank"
          >
            {" "}
            <IconBrandVercel />
          </a>
        </div>
      </div>
    </section>
  );
}
export default ProyectsCard;
