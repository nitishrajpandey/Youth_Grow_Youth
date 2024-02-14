import { NavLink } from "react-router-dom";
import { NavbarDetails, navLink } from "./ContextData";

function Menu() {
  return (
    <div className=" flex flex-col sm:hidden  ">
      <div className="px-5 py-4">
        <ul className=" font-semibold text-[#8D8BAC]">
          {navLink.map((item) => (
            <li key={item.id} className="mb-2 hover:text-[#0ABAB5]">
              <NavLink to={item.active}>{item.title}</NavLink>
            </li>
          ))}
          <NavLink to={"login"}>
            <button className="block mb-2 hover:text-[#0ABAB5]">
              {NavbarDetails.btn1}
            </button>
          </NavLink>
          <NavLink to={"register"}>
            <button className="block hover:text-[#0ABAB5] ">
              {NavbarDetails.btn2}
            </button>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
