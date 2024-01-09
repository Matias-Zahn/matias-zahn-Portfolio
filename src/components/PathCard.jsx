function PathCard({ academy }) {
  return (
    <div className="grid gap-4 border-2 md:min-h-[220px] border-redP/50 rounded-2xl p-4">
      <h4 className="text-xl"> {academy.title} </h4>
      <p className="text-sm text-black/60 dark:text-white/50">
        {" "}
        {academy.information}{" "}
      </p>
      <a target="blank" href={academy?.titulation}>
        Titulacion aquí
      </a>
      <div className="flex justify-between text-redP font-bold">
        <h5> {academy.duration}</h5>
        <h5> {academy.month} </h5>
      </div>
    </div>
  );
}
export default PathCard;
