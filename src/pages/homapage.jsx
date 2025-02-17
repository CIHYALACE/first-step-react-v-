import { NavLink } from "react-router";

export function HomePage() {
    return(
        <>
        <div className="d-flex justify-content-center align-items-center vh-100 px-5 bg-image">
        <div className="card shadow-lg p-5 fadeInUp">
            <h1 className="display-6 fw-bold pb-3">Bootstrap Playground</h1>
            <ul className="px-4">
                <li>Everything here works just like it does when you're running Bootstrap locally.</li>
                <li>Live updating as you code.</li>
                <li>Save and share your component with the community.</li>
            </ul>
            <div className="text-center pt-4">
                <NavLink to='/products' className="btn btn-custom">Get Started</NavLink>
                <NavLink to='/shop' className="btn btn-custom">Customer Page</NavLink>
            </div>
        </div>
    </div>
        </>
    )
}