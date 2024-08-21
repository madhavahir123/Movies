import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logout from "../Register/Logout";

export default function Navbar() {
  const [ismodalopen, setIsmodelopen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openhandler = () => {
    setIsmodelopen(true);
  };
  const closehandler = () => {
    setIsmodelopen(false);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="bg-purple-400 flex justify-between items-center p-4">
        {ismodalopen && <Logout closehandler={closehandler} />}
        <div>
          <ul className="flex list-none  sm:text-2xl gap-4 sm:gap-6">
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-blue-800 font-medium" : "text-blue-200"
                }
              >
                Movie
              </NavLink>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 text-sm bg-white shadow-lg rounded-md text-blue-800 w-40">
                  <li className="px-4 py-2 hover:bg-blue-200">
                    <NavLink to={"/popular"}>Popular</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-200">
                    <NavLink to={"/upcoming"}>Upcoming</NavLink>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-200">
                    <NavLink to={"/newmovie"}>New Movie</NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li className="">
              <NavLink
                to={"/favmovie"}
                className={({ isActive }) =>
                  isActive ? "text-blue-800" : "text-blue-200"
                }
              >
                FavoriteMovie
              </NavLink>
            </li>
          </ul>
        </div>
        <button
          className="py-1 px-4 text-sm sm:text-base text-white rounded-md bg-blue-800 mt-2 sm:mt-0"
          onClick={openhandler}
        >
          Logout
        </button>
      </header>
    </>
  );
}
