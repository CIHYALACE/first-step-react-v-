export function RegisterForm({ shiftImage }) {
  return (
    <>
      <div className="w-50 h-100">
        <form className="my-2">
          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">User Name: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter UserName"
            />
          </div>

          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">Email address: </label>
            <input type="email" className="form-control" placeholder="Email" />
          </div>

          <div className="mb-2 w-75 mx-auto fs-8">
            <label className="form-label text-light">Password: </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
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
