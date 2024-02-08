import { NavbarDetails, navLink } from "./ContextData";

function Menu() {
  return (
    <div className=" flex flex-col sm:hidden  ">
      <div className="px-5 py-4">
        <ul className=" font-semibold text-[#8D8BAC]">
          {navLink.map((item) => (
            <li key={item.id} className="mb-2">
              {item.title}{" "}
            </li>
          ))}
          <button className="block mb-2">{NavbarDetails.btn1}</button>
          <button className="block">{NavbarDetails.btn2}</button>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
