import { useState } from "react";
import { addNewUser } from "../api/userApi"
import { useNavigate } from "react-router-dom";

export function RegisterForm({ shiftImage }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    await addNewUser (formData);
    navigate(0)
  };

  return (
    <>
      <div className="w-50 h-100">
        <form className="my-2" onSubmit={registerHandler}>
          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">User Name: </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              placeholder="Enter UserName"
              onChange={inputHandler}
            />
          </div>

          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">Email address: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              onChange={inputHandler}
            />
          </div>

          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">Password: </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              onChange={inputHandler}
            />
          </div>

          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">Confirm Password: </label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirmed Passowrd"
            />
          </div>

          <div className="link mb-2 w-75 mx-auto text-light">
            <p>
              Have An Account?{" "}
              <a
                className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  shiftImage();
                }}
              >
                Login
              </a>
            </p>
          </div>

          <div className="mb-2 w-75 mx-auto">
            <button
              type="submit"
              className="btn btn-light w-50 text-dark fs-8"
              id="signupLink"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
