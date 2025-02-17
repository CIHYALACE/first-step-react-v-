export function LoginForm({ shiftImage }) {
  return (
    <>
      <div className="w-50 h-100">
        <form className="my-5">
          <div className="mb-3 w-75 mx-auto fs-8">
            <label className="form-label text-light">Email address: </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="mb-3 w-75 mx-auto fs-8">
            <label className="form-label text-light">Password: </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
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
