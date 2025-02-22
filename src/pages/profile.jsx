import { useNavigate } from "react-router-dom"

export function Profile(){
    const navigate = useNavigate()

    const logoutHandler =() =>{
        sessionStorage.clear()
        navigate("/")
        window.location.reload();
    }


    return(
        <>
        <div className="contianer mx-auto ">
            <h1>profile</h1>
            <button className="btn btn-dark" onClick={logoutHandler}>Logut</button>
        </div>
        </>
    )
}