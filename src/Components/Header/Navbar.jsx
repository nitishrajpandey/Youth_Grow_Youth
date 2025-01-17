import { useSelector, useDispatch } from "react-redux";
import { ToggleMenu } from "../../Store/menuSlice";
import { navLink, NavbarDetails } from "./ContextData";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import Menu from "./Menu";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const Togglemenu = useSelector((state) => state.menu.value);

  const handelMenuButton = () => {
    dispatch(ToggleMenu());
  };

  return (
    <div className=" fixed w-full h-[65px] z-50">
      <nav
        className={`overflow-hidden w-full h-65px  bg-white  absolute  ${
          Togglemenu && "h-350px  animate  bg-white "
        }  shadow font-Quicksand  p-4 xs:pr-14 xs:pl-3 ss:pl-7 `}
      >
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-bold text-2xl text-[#3B3951]  md:text-3xl">
              {NavbarDetails.title}
            </h1>
          </div>
          <div className="hidden sm:block ">
            <ul className="flex justify-between gap-5 md:gap-8  font-semibold text-[#8D8BAC]">
              {navLink.map((item) => (
                <li key={item.id} className="hover:text-[#0ABAB5]">
                  <NavLink to={item.active}>{item.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden sm:flex gap-8 text-[#8D8BAC] font-semibold">
            <NavLink to={"login"}>
              <button className="hover:text-[#0ABAB5]">
                {NavbarDetails.btn1}
              </button>
            </NavLink>
            <NavLink to={"register"}>
              <button className="hover:text-[#0ABAB5] ">
                {NavbarDetails.btn2}
              </button>
            </NavLink>
          </div>
          <div className=" block sm:hidden">
            <button onClick={handelMenuButton}>
              {Togglemenu ? (
                <IoIosClose className="text-4xl" />
              ) : (
                <RxHamburgerMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {Togglemenu && <Menu />}
      </nav>
    </div>
  );
}

export default Navbar;
