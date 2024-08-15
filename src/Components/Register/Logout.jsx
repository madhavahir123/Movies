/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

export default function Logout({ closehandler }) {
  const navigate = useNavigate();

  const logouthandler = () => {
    localStorage.removeItem("Logindata");
    navigate("/login");
  };
  return (
    <>
      {createPortal(
        <>
          <div className="logout-backgroud">
            <div className="bg-white py-10 px-20 rounded-md">
              <p className="mt-3 mb-10 text-2xl">
                Are you sure you want to logout
              </p>

              <div className="flex gap-2 top-13 right-9 ">
                <button
                  className="bg-cyan-100 p-2 rounded-md hover:bg-cyan-300"
                  onClick={closehandler}
                >
                  cancle
                </button>
                <button
                  className="bg-red-500 p-2 rounded-md hover:bg-red-700"
                  onClick={logouthandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById("modal")
      )}
    </>
  );
}
