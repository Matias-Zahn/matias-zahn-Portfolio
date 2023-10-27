import { IconBrandJavascript, IconBrandReact } from "@tabler/icons-react"

function ProyectsCard() {
  return (
    <section className="border-2 grid gap-4 p-4 broder-2 rounded-2xl border-redP/50">
    <div className="grid gap-2">
        <h4 className="text-xl">Move.IT</h4>
        <p className="text-sm text-white/50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque repellat ipsam quibusdam eligendi, excepturi eius dolorum exercitationem voluptatibus voluptas voluptates commodi minus distinctio dolor dicta culpa illo odio fugiat dolores!</p>
    </div>
    <div className="flex justify-center gap-4">
        <h4 className="bg-redP/10 text-redP  py-2 px-4 rounded-2xl flex gap-2">React <IconBrandReact /></h4>
        <h4 className="bg-redP/10 text-redP py-2 px-4 rounded-2xl flex gap-2">JavaScript <IconBrandJavascript /> </h4>
    </div>

    <picture>
        <img src="/ProyectImg/ExampleProyect.png" alt="" />
    </picture>
  </section>
  )
}
export default ProyectsCard