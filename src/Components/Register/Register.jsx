import { useFormik } from "formik";
import { registerUpSchemas } from "./Valid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const getlocaldata = () => {
  const data = localStorage.getItem("RegisterData");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};
export default function Register() {
  const navigate = useNavigate();
  const [registerdata, setRegisterdata] = useState(getlocaldata);

  const initialValues = {
    Name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerUpSchemas,
      onSubmit: async (values, action) => {
        const regisrtData = [...registerdata, values];
        setRegisterdata(regisrtData);
        localStorage.setItem("RegisterData", JSON.stringify(regisrtData));
        action.resetForm();
        navigate("/");
      },
    });
  const loginpage = () => {
    navigate("/login");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[450px] bg-purple-200  m-auto mt-10  rounded-lg">
          <div className="text-center">
            <h1 className="underline text-2xl pt-3">Welcome</h1>
            <h3 className="text-xl pt-2">Register</h3>
          </div>
          <div className="m-auto mt-4">
            <div className="w-[320px] m-auto pb-5">
              <label htmlFor="Name" className="text-xl mb-3">
                Name :
              </label>
              <br />
              <input
                type="text"
                name="Name"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 pr-32  placeholder:text-black rounded-md"
                placeholder="Enter Name"
              />
              {errors.Name && touched.Name ? (
                <p className="">{errors.Name}</p>
              ) : null}
            </div>
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
            <div className="w-[320px] m-auto pb-5">
              <label htmlFor="Name" className=" text-xl">
                Confirm PassWord:
              </label>
              <br />
              <input
                type="Password"
                name="confirmpassword"
                value={values.confirmpassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className="px-3 py-2 pr-32  placeholder:text-black rounded-md"
                placeholder="confirm password"
              />
              {errors.confirmpassword && touched.confirmpassword ? (
                <p className="">{errors.confirmpassword}</p>
              ) : null}
            </div>

            <div className="w-[320px] m-auto pb-4 text-center">
              <button
                className="px-6 py-3 bg-fuchsia-400 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            </div>
            <p className="text-center pb-8 cursor-pointer">
              Alredy have an account?
              <a
                className="text-blue-700 cursor-pointer underline"
                onClick={loginpage}
              >
                Sing in
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
