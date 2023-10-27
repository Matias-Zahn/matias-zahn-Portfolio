function ButtomsChanges({isShowInfo, handleChange, value1, value2, value3}) {
  return (
    <div className="relative z-20 flex flex-col   md:flex-row gap-4 lg:gap-10 text-3xl">
    <button
      className={`hover:text-redP uppercase p-4  duration-300 transition-all ${isShowInfo === 'Home' && 'lg:hover:-rotate-90'} `}
      onClick={handleChange}
      value={value1}
    >
      {value1}
    </button>
    <button
      className={`hover:text-redP uppercase p-4   duration-300 transition-all ${isShowInfo === 'Home' && 'lg:hover:-rotate-90'} `}
      onClick={handleChange}
      value={value2}
    >
      {value2}
    </button>
    <button
      className={`hover:text-redP  uppercase p-4   duration-300 transition-all ${isShowInfo === 'Home' && 'lg:hover:-rotate-90'} `}
      onClick={handleChange}
      value={value3}
    >
      {value3}
    </button>
  </div>
  )
}
export default ButtomsChanges