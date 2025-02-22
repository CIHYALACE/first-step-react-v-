import { NavLink } from "react-router-dom";



export function CustomerHeader() {


    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className=" container bg-dark px-3">
            <img src="../../public/footsteps-outline-svgrepo-com.svg" className="logo"/>
            <a className="navbar-brand text-light fs-3" href="#">
              First Step
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
  
                <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => isActive ?  "nav-link text-danger mx-2":"nav-link text-light mx-2"}  to="/">
                    Home
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => isActive ?  "nav-link text-danger mx-2":"nav-link text-light mx-2"} to="/">
                    Products
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className= { ( { isActive } ) => isActive ?  "nav-link text-danger mx-2":"nav-link text-light mx-2"} to="faqs">
                    FaQ's
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto fs-5">
                <li className="nav-item px-2">
                  <NavLink className= { ( { isActive } ) => isActive ?  "nav-link text-danger mx-2":"nav-link text-light mx-2"} to={sessionStorage.getItem("userName") == null? "/account":"/profile"}>
                    <i type="button" className="fa fa-user" aria-hidden="true"></i>
                  </NavLink>
                </li>
                <li className="nav-item px-2">
                  <NavLink className="nav-link text-light position-relative" to={"/cart"}>
                  <i type="button" className="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-danger px-1">
                  <span className="details"> 12 </span>
                  </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )


}