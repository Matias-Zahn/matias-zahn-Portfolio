function PathCard({academy }) {
  console.log(academy)
  return (
    <div className="grid gap-4 border-2 border-redP/50 rounded-2xl p-4">
      <h4 className="text-xl"> {academy.title} </h4>
      <p> {academy.information} </p>
      <div className="flex justify-between text-redP font-bold">
        <h5> {academy.duration}</h5>
        <h5> {academy.month} </h5>
      </div>
    </div>
  )
}
export default PathCard