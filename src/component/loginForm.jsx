import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../redux/usersSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginForm({ shiftImage }) {
  const { users, errors } = useSelector((store) => store.usersSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isValid , setIsValid] = useState (true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(getAllUsersAction());
  }, []);

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    for (let i = 0; i < users.length; i++) {
      if (formData.password === users[i].password && formData.email === users[i].email) {
        sessionStorage.setItem("userName",users[i].userName)
        sessionStorage.setItem("role",users[i].role)
        setIsValid(true);
        navigate("/")
        return; 
      }
    }
    setIsValid(false);
  };

  return (
    <>
      <div className="w-50 h-100">
        <form className="my-5" onSubmit={loginHandler}>
          { !isValid && <div className="alert alert-danger w-75 mx-5 py-2" role="alert">Invalid UserName or Passowrd</div>}
          <div className="mb-3 w-75 mx-auto fs-8">
            <label className="form-label text-light">Email address: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Your Email Address"
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3 w-75 mx-auto fs-8">
            <label className="form-label text-light">Password: </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter Your Password"
              onChange={inputHandler}
            />
          </div>

          <div className="link mb-3 w-75 mx-auto text-light">
            <p>
              Dont Have An Account?{" "}
              <a
                className="link-light link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  shiftImage();
                }}
              >
                Register Now
              </a>
            </p>
          </div>

          <div className="mb-3 w-75 mx-auto">
            <button type="submit" className="btn btn-light w-50 text-dark fs-8">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
