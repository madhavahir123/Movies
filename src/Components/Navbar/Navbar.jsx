import { NavLink } from "react-router-dom";

import { useState } from "react";
import Logout from "../Register/Logout";
export default function Navbar() {
  const [ismodalopen, setIsmodelopen] = useState(false);

  const openhandler = () => {
    setIsmodelopen(true);
  };
  const closehandler = () => {
    setIsmodelopen(false);
  };
  return (
    <>
      <header className="bg-purple-400  flex justify-between ">
        {ismodalopen && <Logout closehandler={closehandler} />}
        <ul className="flex list-none  text-2xl pt-3 pb-3 gap-6 pl-8 ">
          <li className="">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-800 font-medium"
                  : "text-blue-200 list-none"
              }
            >
              Movie
            </NavLink>
          </li>

          <li className="">
            <NavLink
              to={"/favmovie"}
              className={({ isActive }) =>
                isActive ? "text-blue-800" : "text-blue-200 list-none"
              }
            >
              favoriteMovie
            </NavLink>
          </li>
        </ul>
        <button
          className="py-1 px-4 h-10 text-white mt-2 mr-3 rounded-md bg-blue-800"
          onClick={openhandler}
        >
          Logout
        </button>
      </header>
    </>
  );
}
