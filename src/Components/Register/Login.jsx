import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import { loginUpSchemas } from "./Loginvaild";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const register = JSON.parse(localStorage.getItem("RegisterData")) || [];

  const [loginerror, setLoginError] = useState("");

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginUpSchemas,
      onSubmit: async (values, action) => {
        const user = register.find((item) => item.email === values.email);

        if (user) {
          if (user.password === values.password) {
            navigate("/");
            action.resetForm();
          } else {
            setLoginError("Invalid password");
          }
        } else {
          setLoginError("Email not registered");
        }
      },
    });
  const navigatehandler = () => {
    navigate("/register");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[450px] bg-purple-200  m-auto mt-10  rounded-lg">
          <div className="text-center">
            <h1 className="underline text-2xl pt-3">Welcome Back!</h1>
            <h3 className="text-xl pt-2">Login</h3>
          </div>
          <div className="m-auto mt-4">
            <div className="w-[320px] m-auto pb-5">
              <label htmlFor="Name" className=" text-xl">
                Email:
              </label>
              <br />
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 pr-32  placeholder:text-black rounded-md"
                placeholder="Enter Email"
              />
              {errors.email && touched.email ? (
                <p className="">{errors.email}</p>
              ) : null}
            </div>
            <div className="w-[320px] m-auto pb-5">
              <label htmlFor="Name" className=" text-xl">
                PassWord:
              </label>
              <br />
              <input
                type="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 pr-32  placeholder:text-black rounded-md"
                placeholder="Enter password"
              />
              {errors.password && touched.password ? (
                <p className="">{errors.password}</p>
              ) : null}
            </div>
            {loginerror && (
              <p className="text-red-700  w-48 mb-5 m-auto">{loginerror}</p>
            )}
            <div className="w-[320px] m-auto pb-4 text-center">
              <button
                className="px-6 py-3 bg-fuchsia-400 rounded-lg"
                type="submit"
              >
                Login
              </button>
              <h2 className="cursor-pointer">
                create a new account{" "}
                <a
                  className="text-blue-700 cursor-pointer underline"
                  onClick={navigatehandler}
                >
                  Register
                </a>
              </h2>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
