import { NavLink } from "react-router";

export function Page404() {
    return(
        <>
        <div className="custom-bg text-dark bg-image">
    <div className="d-flex align-items-center justify-content-center min-vh-100 px-2 custom-bg">
        <div className="text-center">
            <h1 className="display-1 fw-bold text-light">404</h1>
            <p className="fs-2 fw-medium mt-4 text-light">Oops! Page not found</p>
            <p className="mt-4 mb-5 text-light">The page you're looking for doesn't exist or has been moved.</p>
            <NavLink to="/" className="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">
                Go Home
            </NavLink>
        </div>
    </div>
</div>
        </>
    )
}