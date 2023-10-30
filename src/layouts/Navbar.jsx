import { IconApps } from "@tabler/icons-react";
import ButtomsChanges from "../components/ButtomsChanges";
import MenuNavBar from "./MenuNavBar";
function Navbar({ handleChange, scrolling, isShowModal, setIsShowModal, isShowInfo }) {
  const handleModal = () => {
    setIsShowModal(true);
  };
  const NAVBAR_TRANSITION = `flex justify-center mb-10 ${
    scrolling > 0
      ? "bg-redP fixed  right-0 left-0 z-20  overflow-y-scroll p-2  transition-all duration-500 "
      : "p-0  bg-transparent transition-all duration-500"
  } `;

  return (
    <div className="h-20 md:h-20">
      <nav className={` ${NAVBAR_TRANSITION} `}>
        <div className="hidden md:block">
          <ButtomsChanges isShowInfo={isShowInfo} handleChange={handleChange} />
        </div>
        <div className="flex justify-between w-full px-5 py-4 md:hidden">
          <h4 className="text-3xl">Matias Zahn</h4>
          <button onClick={handleModal}>
            {" "}
            <IconApps size={30} />
          </button>
        </div>
      </nav>
      <MenuNavBar isShowModal={isShowModal} isShowInfo={isShowInfo}  handleChange={handleChange} />
    </div>
  );
}
export default Navbar;
